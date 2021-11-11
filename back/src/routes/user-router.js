const { Database } = require('../database/database.js');
const express = require('express');

const userRouter = express.Router();

userRouter.post('/sign-up', (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const db = new Database('./users');
        db.store(email, { name, email, password });
        res.json({ name, email });
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
        if(db.isKeyExists(email)) {
            const user = db.get(email);
            if(user.value.password === password) {
                res.json(user.value);
                res.end();
            } else {
                next({ status: 401, message: 'Incorrect Password!' })
            }
        } else next({ status: 401, message: 'Incorrect Email!' })
    } catch (error) {
        next(error);
    }
})


module.exports = { userRouter };