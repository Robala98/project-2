const router = require('express').Router();

const frontendRoutes = require('./frontendRoutes');
const apiRoutes = require('./api');

router.use('/', frontendRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>')
});

module.exports = router;
