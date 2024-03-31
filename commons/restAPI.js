const env = require('./envStorage');

const html2json = (html) => {
    // const message
}

const isJustAMoment = (text) => {
    return text.includes('just a moment');
}

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

            if (isJustAMoment(body)) {
                body = await response.text();
            }
            console.log(body)
            body = body.replaceAll('{"d":null}', '');

            return env.server.isDeployed ? body : JSON.parse(body);
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    get: async (url, {cookie}) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookie
                }
            });

            let body = await response.text();
            body = body.replaceAll('{"d":null}', '');



            return env.server.isDeployed ? body : JSON.parse(body);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}