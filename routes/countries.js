const express = require('express');
const router = express.Router();
const Country = require('models/Country');

// GET homepage of the countries route
    // root of 'countries' router
    // async because we are dealing with a database
router.get('/', async (req, res) => {
    const countries = await Country.findAll(); // Countries will be an array of JSON objects
    res.render('countries/index', {
        title: 'Countries',
        countryList: countries
    });
});

// GET a single country from the database with ID
//  :id is a placeholder for the id #
router.get('/:id', async (req, res) => {
    const requestedId = req.params.id; // 'req.params.id' alligns with ':id' placeholder
    const country = await Country.findOne({
        where: { id: requestedId } // "id: requestedId" is an object because you can specify multiple WHERE clauses
    });

    // View to render
    res.render('countries/detail', {
        // Data we want to pass to the view
        title: 'Country Details',
        // Passes whole country object
        countryItem: country
    });
})

module.exports = router;