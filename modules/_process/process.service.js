const ReadApp = require("../../entities/readApp");
const Response = require("../../commons/response");
const Logger = require('../../commons/Logger');

const ProcessService = {
    readApp: new ReadApp(),
    daily: async (req, res) => {
        const result = await ProcessService.readApp.daily();
        Logger.info(result);
        return Response.createSuccessResponse(res, result);
    }
}

module.exports = ProcessService;