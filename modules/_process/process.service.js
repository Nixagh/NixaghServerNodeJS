const ReadApp = require("../../entities/readApp");
const Response = require("../../commons/response");

const ProcessService = {
    readApp: new ReadApp(),
    daily: async (req, res) => {
        const result = await ProcessService.readApp.daily();
        return Response.createSuccessResponse(res, result);
    }
}

module.exports = ProcessService;