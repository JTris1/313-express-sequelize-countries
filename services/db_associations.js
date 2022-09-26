const Country = require('models/Country');
const Language = require('models/Language');
const CountryLanguage = require('models/CountryLanguage');

const setAssociations = function() {
    // Define many to many relationship through CountryLanguage model
    //  No need to import Sequelize as it is being imported through the model imports
    Country.belongsToMany(Language, {
        through: CountryLanguage,
        foreignKey: 'country_id', // The table field that relates to the Country model
        otherKey: 'language_id' // The table field that relates to the Language model
    });

    // If I need the inverse, just reverse the relationship
    // Example:
    Language.belongsToMany(Country, {
        through: CountryLanguage,
        foreignKey: 'language_id', // The table field that relates to the Language model
        otherKey: 'country_id' // The table field that relates to the Country model
    });
}

module.exports = setAssociations;