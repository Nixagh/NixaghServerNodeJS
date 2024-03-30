const Token = require('../../schemas/token.schema');

module.exports = {
    checkAuth: async (req) => {
        // get token from query
        const token = req.query.token;

        // find token in database
        const tokenData = await Token.findOne({token: token});
        console.log(tokenData)
        // check if token is found
        return tokenData !== null;
    }
}
