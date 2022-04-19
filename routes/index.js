const router = require('express').Router(); // we want an instance of the default router from express

const frontendRoutes = require('./frontendRoutes');

router.use('/', frontendRoutes);

module.exports = router;