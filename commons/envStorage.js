const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    status: {
        success: {
            code: 200,
            message: 'OK',
            name: 'success'
        },
        error: {
            code: 500,
            message: 'Internal Server Error',
            name: 'error'
        },
        notFound: {
            code: 404,
            message: 'Not Found',
            name: 'notFound'
        },
        badRequest: {
            code: 400,
            message: 'Bad Request',
            name: 'badRequest'
        },
        unauthorized: {
            code: 401,
            message: 'Unauthorized',
            name: 'unauthorized'
        },
    },
    server: {
        port: process.env.PORT || 3000,
        isDeployed: process.env.DEPLOYED || false
    },
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
        username: process.env.MONGO_USERNAME || 'root',
        password: process.env.MONGO_PASSWORD || 'root'
    },
    discord: {
        token: process.env.DISCORD_TOKEN || 'token'
    }
}