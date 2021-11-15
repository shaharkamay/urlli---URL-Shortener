export { redirectorRouter };
import express from 'express';
import { isKeyExists } from '../database/database.js';
import { Url } from '../database/models/url.js';

const redirectorRouter = express.Router();

redirectorRouter.get('/:shortUrlId', async (req, res, next) => {
    try {
        const shortUrlId = req.params.shortUrlId;
        if(await isKeyExists('shortUrlId', shortUrlId, Url)) {
            const url = await Url.findOne({ shortUrlId });
            await Url.updateOne({ shortUrlId }, { $inc: { redirectCount: 1 }, lastClicked: new Date() });
            const longUrl = url.url;
            res.redirect(301, longUrl);
        } else next({ status: 404, message: 'Url short key not found' });
    } catch (error) {
        next(error);
    }
});