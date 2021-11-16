import path from 'path';
import express from 'express';
import cors from 'cors';
import { redirectorRouter } from './routes/redirector.js';
import { apiRouter } from './routes/api.js';
import { userRouter } from './routes/user-router.js';
import { errorHandler } from './error-handling/error-handler.js';
import { authUser, unauthUser } from './middleware/user-handler.js'; //not working for some reason...
import mongoClient from './database/client.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoClient.init();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', express.static(path.resolve('./dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/analytics.html'));
});

app.get('/dashboard', authUser, (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/dashboard.html'));
});

app.get('/log-in', unauthUser, (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/log-in.html'));
});

app.get('/sign-up', unauthUser, (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/sign-up.html'));
});
    
app.use('/api', apiRouter)
app.use('/user', userRouter);
app.use('/', redirectorRouter);

app.use(errorHandler);

// start the server
app.listen(port, () => {
    console.log('app started');
});