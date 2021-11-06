export { apiRouter };
import express from 'express';
import { Database } from '../database/database.js'
import { domain } from '../helpers/constants.js'

const apiRouter = express.Router();

apiRouter.post('/shorten', (req, res, next) => {
    try {
        const url = req.body.url;
        const userEmail = req.body.userEmail; //stopped hereeeeeeeeeeeeeeeeeeeeeeee
        const db = new Database('./urls');
        let shortUrlId = Math.random().toString(36).substr(2, 4);
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
        const data = db.get(shortUrlId);
        res.json({ data: data.value, timestamp: data.timestamp });
        res.end();
    } catch (error) {
        next(400);
    }
})