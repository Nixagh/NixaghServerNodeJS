const mongoose = require('mongoose');
const logger = require('morgan');
const env = require('../../commons/envStorage');

const connect = async () => {
    try {
        const conn = await mongoose.connect(env.mongo.uri);
        logger('Connected to database', {status: env.status.success.name});
    } catch (e) {
        logger('Failed to connect to database', {status: env.status.error.name});
    }
}

module.exports = connect;