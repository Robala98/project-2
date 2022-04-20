const router = require('express').Router();

const frontendRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');

router.use('/', frontendRoutes);
router.use('/api', apiRoutes);


// wrong route error handling
router.use((req, res) => {
    // res.send('<h1>Wrong Route!</h1>')
    res.render('wrongPage');
});

module.exports = router;
