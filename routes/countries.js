const express = require('express');
const router = express.Router();
const Country = require('models/Country');

// GET homepage of the countries route
    // root of 'countries' router
    // async because we are dealing with a database
router.get('/', async (req, res) => {
    const countries = await Country.findAll(); // Countries will be an array of JSON objects
    res.render('countries', {
        title: 'Countries',
        countryList: countries
    });
});

module.exports = router;