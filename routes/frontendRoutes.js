const router = require('express').Router(); // we want an instance of the default router from express

// import the models for use by our server
// const { Attraction, Favorite, User } = require('./../models');

router.get('/', async (req, res) => {
    res.send('route works');
});

module.exports = router;