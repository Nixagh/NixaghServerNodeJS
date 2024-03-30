const express = require('express');
const app = express();
const env = require('./commons/envStorage');

// connect to database
const connect = require('./modules/connectDB/connectDB');
connect().then();

// router
const systemRouter = require('./modules/system/system.router');
const readAppConfigRouter = require('./modules/readApp/readAppConfig.router');
const processRouter = require('./modules/_process/process.router');

// middleware
app.use(express.json());


// default router
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// user router
app.use('/system', systemRouter);
app.use('/readAppConfig', readAppConfigRouter);
app.use('/process', processRouter);

app.listen(env.server.port, () => {
    console.log(`Example app listening on port ${env.server.port}`)
});

module.exports = app;