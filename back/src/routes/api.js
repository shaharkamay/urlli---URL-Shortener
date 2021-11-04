export { apiRouter };
import express from 'express';
import { addNewUrl, getUrlByShortUrl, getShortUrlByUrl, isShortUrlExists } from '../helpers/database.js'
import { domain } from '../helpers/constants.js'

const apiRouter = express.Router();

apiRouter.post('/shorten', (req, res, next) => {
    const url = req.headers.url;
    let shortUrl = domain + Math.random().toString(36).substr(2, 4);
    while(isShortUrlExists(shortUrl)) shortUrl = domain + Math.random().toString(36).substr(2, 4);
    addNewUrl(shortUrl, url);
    res.json(shortUrl);
})