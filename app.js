const express = require('express');
const app = express();
const env = require('./commons/envStorage');

// router
const router = express.Router();
const systemRouter = require('./modules/system/system.router');

app.use(express.json());

// default router
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// user router
app.use('/system', systemRouter);

app.listen(env.server.port, () => {
    console.log(`Example app listening on port ${env.server.port}`)
});

module.exports = app;