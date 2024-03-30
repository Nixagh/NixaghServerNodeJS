const ReadAppConfig = require('../../schemas/readAppConfig.schema');
const Response = require('../../commons/response');

const readAppConfigService = {
    getReadAppConfigs: async (req, res) => {
        const data = await ReadAppConfig.find(null, null, null);

        return Response.createSuccessResponse(res, data);
    },
    getReadAppConfigByKey: async (req, res) => {
        const key = req.params.key;

        const data = await ReadAppConfig.findOne({key: key}, null, null);
        return data ? Response.createSuccessResponse(res, data)
            : Response.createNotFoundResponse(res, `ReadAppConfig with key '${key}' not found`);
    },
    updateKey: async (req, res) => {
        const body = req.body;

        let _result = [];
        try {
            for (const key of Object.keys(body)) {
                const result = await ReadAppConfig.updateOne({key: key}, {value: body[key]});
                if (result.modifiedCount > 0) _result.push(key);
            }

            return Response.createSuccessResponse(res, _result);
        } catch (error) {
            return Response.createErrorResponse(res, error);
        }
    },
    createKey: async (req, res) => {
        const body = req.body;

        let _result = {
            success: [],
            existing: [],
            error: []
        };

        try {
            for (const key of Object.keys(body)) {
                // check if key already exists
                const data = await ReadAppConfig.findOne({key: key}, null, null);
                if (data) _result.existing.push(key);

                // create new key
                const result = await ReadAppConfig.create({key: key, value: body[key]}, null);

                if (result) _result.success.push(key);
                else _result.error.push(key);
            }

            return Response.createSuccessResponse(res, _result);
        } catch (error) {
            return Response.createErrorResponse(res, error);
        }
    }
}

module.exports = readAppConfigService;