const { Database } = require('../database/database.js');
const express = require('express');
const bcrypt = require('bcrypt');
// const passport = require('passport');
// const users = [];



const userRouter = express.Router();

userRouter.post('/sign-up', (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const hashedPassword = bcrypt.hash(req.body.password, 10);
        const db = new Database('./users');
        db.store(email, { name, email, password: hashedPassword });
        req.session.name = name;
        res.json({ name, email });
        res.end();
    } catch (error) {
        next(error)
    }
})

userRouter.post('/log-in', (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
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