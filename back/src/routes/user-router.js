export { userRouter };
import { storeData, isKeyExists } from '../database/database.js';
import { User } from '../database/models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bcrypt from 'bcrypt';

const userRouter = express.Router();

userRouter.post('/sign-up', async (req, res, next) => {
    try {
        const name = req.body.name.trim(); //noam golani
        const [ first_name, last_name ] = name.split(' '); // need to changeeeeeeeeeeeeeeeeeeeeeeeee
        const email = req.body.email;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await storeData({ email, password: hashedPassword, first_name, last_name  }, User);
        res.json({ name, email });
        res.end();
    } catch (error) {
        next(error)
    }
})

userRouter.post('/log-in', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if(await isKeyExists('email', email, User)) {
            const user = await User.findOne({ email });
            if(await bcrypt.compare(password, user.password)) {
                // res.cookie('token', generateAccessToken(`${user.first_name} ${user.last_name}`), {
                res.cookie('token', generateAccessToken(user.email), {
                    maxAge: 1000 * 60 * 60,
                    sameSite: true,
                });
                res.cookie('name',`${user.first_name} ${user.last_name}`, {
                    maxAge: 1000 * 60 * 60,
                    sameSite: true,
                });
                res.cookie('email', user.email, {
                    maxAge: 1000 * 60 * 60,
                    sameSite: true,
                });
                res.json({ name: `${user.first_name} ${user.last_name}`, email: user.email });
                res.end();
            } else {
                next({ status: 401, message: 'Incorrect Password!' })
            }
        } else next({ status: 401, message: 'Incorrect Email!' })
    } catch (error) {
        next(error);
    }
})

userRouter.delete('/log-out', (req, res, next) => {
    try {
        res.clearCookie("token");
        res.clearCookie("name");
        res.json("Cookie has been deleted");
        res.end();
    } catch (error) {
        next(error)
    }
})


function validateInput(input) {
    if (!input) return false;
    if (input === '') return false;
    return true;
  }

function generateAccessToken(user) {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '600s',
    });
}