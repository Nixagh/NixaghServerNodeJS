const Discord = require('../../entities/discord');
const Response = require('../../commons/response');
const env = require('../../commons/envStorage');

const discord = Discord.getInstance();

module.exports = {
    startBot: async (req, res) => {
        try {
            const isStart = await discord.start();
            const isLogin = discord.login(env.discord.token);
            return isStart && isLogin ? Response.createSuccessResponse(res, 'Bot started successfully')
                : Response.createErrorResponse(res, 'Failed to start bot');
        } catch (error) {
            return Response.createErrorResponse(res, error.message);
        }
    },
    updateActivity: async (req, res) => {
        try {
            const activities = req.body;
            const response = await discord.setActivities(activities);
            return Response.createSuccessResponse(res, 'Activities updated successfully');
        } catch (error) {
            return Response.createErrorResponse(res, error.message);
        }
    }
}