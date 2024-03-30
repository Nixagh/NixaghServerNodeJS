const express = require('express')
const router = express.Router();

const Response = require('../../commons/response');

router.get('/', (req, res) => {
    const response = Response.createResponse(200, 'OK', null);
    Response.sendJson(res, response);
});

router.get('/health', (req, res) => {
    const response = Response.createResponse(200, 'OK', null);
    Response.sendJson(res, response);
});

module.exports = router;