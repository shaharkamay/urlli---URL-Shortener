export { userRouter };
import { addUser, loginUser } from '../helpers/database.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/sign-up', (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        addUser({ name, email, password });

    } catch (error) {
        next(error)
    }
})

userRouter.get('/log-in', (req, res, next) => {
    try {
        const email = req.headers.email;
        const password = req.headers.password;
        const userName = loginUser(email, password);
        res.json(userName);
        res.end();
    } catch (error) {
        next(error);
    }
})