export { redirectorRouter };
import express from 'express';
import { domain } from '../helpers/constants.js'
import { Database } from '../database/database.js'

const redirectorRouter = express.Router();

redirectorRouter.get('/:shortUrlId', (req, res, next) => {
    try {
        const shortUrlId = req.params.shortUrlId;
        const db = new Database('./urls');
        if(db.isKeyExists(shortUrlId)) {
            const data = db.get(shortUrlId);
            const redirectCount = data.value.redirectCount + 1;
            data.value = { url: data.value.url, shortUrlId: data.value.shortUrlId, redirectCount, creationDate: data.value.creationDate };
            const url = data.value.url;
            res.redirect(301, url);
        } else next({ status: 404, message: 'Url short key not found' });
    } catch (error) {
        next(error);
    }
});
