const env = require('./envStorage');
const Logger = require('./Logger');

module.exports = {
    post: async (url, {cookie}) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookie,
                    'User-Agent': 'PostmanRuntime/7.37.0',
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Connection': 'keep-alive',
                    'Postman-Token': '0c3b1d3b-7f1d-4c6b-8d8b-3e9b3e6f5e7d',
                }
            });
            // get domain from url
            let body = await response.text();
            body = body.replaceAll('{"d":null}', '');
            return JSON.parse(body);
        } catch (error) {
            Logger.error(error);
            return null;
        }
    }
}