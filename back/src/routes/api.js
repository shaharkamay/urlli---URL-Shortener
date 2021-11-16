export { apiRouter };
import express from 'express';
import { isKeyExists, storeData } from '../database/database.js';
import mongoose from 'mongoose';
import { User } from '../database/models/user.js';
import { Url } from '../database/models/url.js';
import { domain } from '../helpers/constants.js';

const apiRouter = express.Router();

apiRouter.post('/shorten', async (req, res, next) => {
    try {
        const url = req.body.url;
        const userEmail = req.body.userEmail;
        const custom = req.body.custom;
        if(await isKeyExists('shortUrlId', custom, Url)) return next({ status: 409, message: 'Custom url id already exists!' });
        let shortUrlId = custom || Math.random().toString(36).substr(2, 4);
        while(await isKeyExists('shortUrlId', shortUrlId, Url)) shortUrlId = Math.random().toString(36).substr(2, 4);
        const creationDate = new Date();
        try {
            await storeData({ shortUrlId, url, redirectCount: 0, creationDate, lastClicked: null, }, Url);
        } catch (error) {
            return next({ status: 502, message: 'Bad Gateway' });
        }
        if(userEmail) {
            if(await isKeyExists('email', userEmail, User)) {
                const isUpdated = (await User.updateOne({ email: userEmail }, { $push: { shortUrlIds: shortUrlId } })).matchedCount ? true : false;
                if(isUpdated) return next({ status: 502, message: 'Could not set short link to user!' });
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

apiRouter.get('/analytics/:shortUrlId', async (req, res, next) => {
    try {
        const shortUrlId = req.params.shortUrlId;
        if(await isKeyExists('shortUrlId', shortUrlId, Url)) {
            const url = await Url.findOne({ shortUrlId });
            res.json({ 
                'Url': url.url,
                'Short Url Id': url.shortUrlId,  
                'Redirect Count': url.redirectCount,
                'Creation Date': url.creationDate.toLocaleString(),
                'Last Clicked': url.lastClicked.toLocaleString(),
            });
            res.end();
        } else next({ status: 404, message: 'Url short key not found' });
    } catch (error) {
        next(error);
    }
})

apiRouter.get('/dashboard/urls', async (req, res, next) => {
    try {
        const userEmail = req.headers.useremail;
        if(await isKeyExists('email', userEmail, User)) {
            const userData = await User.findOne({ email: userEmail });
            const shortUrlIds = userData.shortUrlIds;
            if(shortUrlIds && shortUrlIds.length > 0) {
                const urls = [];
                for (const shortUrlId of shortUrlIds) {
                    if(await isKeyExists('shortUrlId', shortUrlId, Url)) {
                        const url = await Url.findOne({ shortUrlId });
                        const shortUrl = domain + shortUrlId;
                        const longUrl = url.url;
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