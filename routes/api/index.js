const router = require('express').Router( );
// const locationRoute = require('./location-routes');
// const travelerRoute = require('./traveler-routes');
// const tripRoute = require('./trip-routes');
const yelpRoutes = require('./yelp');

router.use('/yelp', yelpRoutes);


router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>')
});

module.exports = router;