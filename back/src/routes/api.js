const express = require('express');
const { Database } = require('../database/database.js')
const { domain } = require('../helpers/constants.js')

const apiRouter = express.Router();

apiRouter.post('/shorten', (req, res, next) => {
    try {
        const url = req.body.url;
        const userEmail = req.body.userEmail;
        const custom = req.body.custom;
        console.log(custom);
        const db = new Database('./urls');
        if(db.isKeyExists(custom)) return next({ status: 409, message: 'Custom url id already exists!' });
        let shortUrlId = custom || Math.random().toString(36).substr(2, 4);
        while(db.isKeyExists(shortUrlId)) shortUrlId = Math.random().toString(36).substr(2, 4);
        const creationDate = new Date().toLocaleString();
        db.store(shortUrlId, { url, shortUrlId, redirectCount: 0, creationDate });
        if(userEmail) {
            const userDb = new Database('./users');
            if(userDb.isKeyExists(userEmail)) {
                const userData = userDb.get(userEmail);
                const shortUrlIds = userData.value.shortUrlIds ? userData.value.shortUrlIds : [];
                shortUrlIds.push(shortUrlId);
                userData.value = { name: userData.value.name, email: userData.value.email, password: userData.value.password, shortUrlIds }
            } else {
                next({ status: 401, message: 'Unauthorized email' })
            }
        }
        res.json(domain + shortUrlId);  
        res.end();
    } catch (error) {
        next(error);
    }
})

apiRouter.get('/analytics/:shortUrlId', (req, res, next) => {
    try {
        const shortUrlId = req.params.shortUrlId;
        const db = new Database('./urls');
        if(db.isKeyExists(shortUrlId)) {
            const data = db.get(shortUrlId);
            res.json({ data: data.value, timestamp: data.timestamp });
            res.end();
        } else next({ status: 404, message: 'Url short key not found' });
    } catch (error) {
        next(error);
    }
})

apiRouter.get('/dashboard/urls', (req, res, next) => {
    try {
        const userEmail = req.headers.useremail;
        const usersDb = new Database('./users');
        const urlsDb = new Database('./urls');
        if(usersDb.isKeyExists(userEmail)) {
            const userData = usersDb.get(userEmail);
            const shortUrlIds = userData.value.shortUrlIds;
            if(shortUrlIds && shortUrlIds.length > 0) {
                const urls = [];
                for (const shortUrlId of shortUrlIds) {
                    if(urlsDb.isKeyExists(shortUrlId)) {
                        const data = urlsDb.get(shortUrlId);
                        const shortUrl = domain + shortUrlId;
                        const longUrl = data.value.url;
                        urls.push({ shortUrl, longUrl });
                    } else next({ status: 404, message: 'Url short key not found' })
                }
                res.json(urls);
                res.end();
            } else {
                next({ status: 404, message: 'User did not create links yet' });
            }
        } else {
            next({ status: 401, message: 'Unauthorized email' })
        }
    } catch (error) {
        next(error)
    }
})


module.exports = { apiRouter };