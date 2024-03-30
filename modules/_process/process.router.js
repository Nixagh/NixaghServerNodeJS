const express = require('express')
const router = express.Router();

const processService = require('./process.service');
const discordService = require('../discord/discord.service');
const authentication = require('../authentication/auth.router');

// reading manga app
router.get('/daily', processService.daily);

// discord
router.get('/discord/start', discordService.startBot);
router.post('/discord/activity', authentication.checkAuth, discordService.updateActivity);

module.exports = router;