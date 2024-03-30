module.exports = {
    createResponse: (status, message, data) => {
        return {
            status: status,
            message: message,
            data: data
        }
    },

    createErrorResponse: (status, message, error) => {
        return {
            status: status,
            message: message,
            error: error
        }
    },

    sendJson(res, response) {
        res.type('json').send(response);
    }
}