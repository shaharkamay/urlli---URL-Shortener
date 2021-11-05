export { userRouter };
import { Database } from '../database/database.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/sign-up', (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const db = new Database('./users');
        db.store(email, { name, email, password });
        res.json(name);
        res.end();
    } catch (error) {
        next(error)
    }
})

userRouter.get('/log-in', (req, res, next) => {
    try {
        const email = req.headers.email;
        const password = req.headers.password;
        const db = new Database('./users');
        const user = db.get(email);
        if(user.value) {
            if(user.value.password === password) {
                res.json(user.value.name);
                res.end();
            } else {
                next(401)
            }
        } else {
            next(401)
        }
    } catch (error) {
        next(error);
    }
})