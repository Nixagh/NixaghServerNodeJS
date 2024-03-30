const Token = require('../../schemas/token.schema');

module.exports = {
    checkAuth: async (token) => {
        const tokenData = await Token.findOne({token: token}, null, null);

        return tokenData !== null;
    }
}