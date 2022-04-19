const router = require('express').Router(); // we want an instance of the default router from express

const frontendRoutes = require('./frontendRoutes');
const apiRoutes = require('./api');

router.use('/', frontendRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>')
});

module.exports = router;