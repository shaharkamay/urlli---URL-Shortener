export { redirectorRouter };
import express from 'express';
import { domain } from '../helpers/constants.js'
import { addNewUrl, getUrlByShortUrl, getShortUrlByUrl } from '../helpers/database.js'

const redirectorRouter = express.Router();

redirectorRouter.get('/:code', (req, res, next) => {
    try {
        const code = req.params.code;
        const shortUrl = domain + code;
        const url = getUrlByShortUrl(shortUrl);
        if(url) res.redirect(301, url);
        else next({status: 401, message: "this url does not exist!"});
    } catch (error) {
        next(error);
    }
    
});
