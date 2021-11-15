export { userRouter };
import { storeData, isKeyExists } from '../database/database.js';
import { User } from '../database/models/user.js';
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