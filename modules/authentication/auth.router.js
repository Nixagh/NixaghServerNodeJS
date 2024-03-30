const AuthService = require('./auth.service');
const Response = require('../../commons/response');

const AuthRouter = {
    checkAuth: async (req, res, next) => {
        // get token from header
        const token = req.header('Authorization');
        // check token
        const checkAuth = await AuthService.checkAuth(token);

        if (checkAuth) {
            next();
        } else {
            return Response.createUnauthorizedResponse(res);
        }
    }
}


module.exports = AuthRouter;