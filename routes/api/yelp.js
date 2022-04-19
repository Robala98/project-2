var axios = require('axios');
const router = require('express').Router();

// POST METHOD ON /api/yelp
router.post('/', async (req, res) => {
    var config = {
      method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972',
      headers: { 
        'Authorization': 'Bearer UAuVrLrHQLfdqg-qf9iBPIt5v1PVTT1ZwsZWcw6KajyMdQMMZ1cCreeHfJJKsyNerB7jboINNW4kkVJ3Y9RcEa01QSm6vldjzMO6kiOTfh8JAQ67OOpnVq_P3flWYnYx'
      }
    };
    
    const data = await axios(config)
    .then(function (response) {
    
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });

    res.json(data);

})

module.exports = router;