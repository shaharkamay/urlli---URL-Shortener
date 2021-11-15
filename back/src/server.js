// export { app };
const path = require('path');
const express = require('express');
const cors = require('cors');
const { redirectorRouter } = require('./routes/redirector.js');
const { apiRouter } = require('./routes/api.js');
const { userRouter } = require('./routes/user-router.js');
const { errorHandler } = require('./error-handling/error-handler.js');
const { userHandler } = require('./middleware/user-handler.js'); //not working for some reason...
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/', express.static(path.resolve('./dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/analytics.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/dashboard.html'));
});

app.get('/log-in', (req, res) => {
    res.sendFile(path.resolve('./dist/sub-pages/log-in.html'));
});

app.get('/sign-up', (req, res) => {
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