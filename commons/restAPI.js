const env = require('./envStorage');

module.exports = {
    post: async (url, {cookie}) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookie
                }
            });

            let body = await response.text();
            body = body.replaceAll('{"d":null}', '');

            return JSON.parse(body);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}