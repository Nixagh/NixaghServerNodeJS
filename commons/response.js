const { status} = require('../commons/envStorage')

const Response = {
    createResponse: (status, message, data) => {
        return {
            status: status,
            message: message,
            data: data
        }
    },

    createSuccessResponse: (res, data) => {
        const response = {
            status: status.success.code,
            message: status.success.message,
            data: data
        }

        return Response.sendJson(res, response);
    },

    createNotFoundResponse: (res, message) => {
        const response = {
            status: status.notFound.code,
            message: message || status.notFound.message,
            data: null
        }
        return Response.sendJson(res, response);
    },

    createErrorResponse: (res, message) => {
        const response = {
            status: status.error.code,
            message: message || status.error.message,
            data: null
        }
        return Response.sendJson(res, response);
    },

    createUnauthorizedResponse: (res, message) => {
        const response = {
            status: status.unauthorized.code,
            message: message || status.unauthorized.message,
            data: null
        }
        return Response.sendJson(res, response);
    },

    sendJson(res, response) {
        res.type('json').send(response);
    }
}

module.exports = Response;