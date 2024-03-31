const ReadAppConfig = require("../schemas/readAppConfig.schema");
const RestAPI = require("../commons/restAPI");

class ReadApp {
    #config;
    #cookie;

    constructor() {
        this.init();
    }

    async init() {
        const data = await ReadAppConfig.find(null, null, null);

        const obj = {};
        Object.keys(data).forEach(key => {
            obj[data[key].key] = data[key].value;
        });
        this.#config = obj;

        this.#cookie = this.#config['cookie'];
    }

    get baseUrl() {
        return this.#config['baseUrl'];
    }

    get attendUrl() {
        return this.baseUrl + this.#config['attendUrl'];
    }

    get luckyDrawUrl() {
        return this.baseUrl + this.#config['luckyDrawUrl'];
    }

    async daily() {
        // attend
        const attend = await this.#attend();
        // lucky draw
        const luckyDraw = await this.#luckyDraw();

        return {
            attend: attend.message,
            luckyDraw: luckyDraw.message
        };
    }

    async #attend() {
        const response = await RestAPI.post(this.attendUrl, {cookie: this.#cookie});
        return response ? response : {message: 'Failed to attend'};
    }

    async #luckyDraw() {
        const response = await RestAPI.post(this.luckyDrawUrl, {cookie: this.#cookie});
        if("Bạn được Quay thêm 1 lần nữa" === response.message) await this.#luckyDraw();

        return response ? response : {message: 'Failed to lucky draw'};
    }
}

module.exports = ReadApp;