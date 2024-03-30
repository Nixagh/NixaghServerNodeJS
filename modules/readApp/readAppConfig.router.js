const express = require('express')
const router = express.Router();
const authRouter = require('../../modules/authentication/auth.router');

const readAppConfigService = require('./readAppConfig.service');
router.use(authRouter.checkAuth);

router.get('/', readAppConfigService.getReadAppConfigs);

router.get('/:key', readAppConfigService.getReadAppConfigByKey);

router.put('/', readAppConfigService.updateKey);

router.post('/', readAppConfigService.createKey);

module.exports = router;