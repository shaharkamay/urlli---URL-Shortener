export { redirectorRouter };
import express from 'express';
import { domain } from '../helpers/constants.js'
import { Database } from '../database/database.js'

const redirectorRouter = express.Router();

redirectorRouter.get('/:shortUrlId', (req, res, next) => {
    try {
        const shortUrlId = req.params.shortUrlId;
        const db = new Database('./urls');
        const data = db.get(shortUrlId);
        const redirectCount = data.value.redirectCount + 1;
        data.value = { url: data.value.url, shortUrlId: data.value.shortUrlId, redirectCount, creationDate: data.value.creationDate };
        const url = data.value.url;
        if(url) res.redirect(301, url);
        else next(401);
    } catch (error) {
        next(error);
    }
    
});
