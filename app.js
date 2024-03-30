const express = require('express');
const app = express();
const env = require('./commons/envStorage');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(env.server.port, () => {
    console.log(`Example app listening on port ${env.server.port}`)
});