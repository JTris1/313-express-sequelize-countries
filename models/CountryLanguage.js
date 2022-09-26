const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class CountryLanguage extends Model {}

// Initialize the table connected to the attributes
CountryLanguage.init({
    country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    language_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    sequelize,
    tableName: 'countries_languages', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    modelName: 'countries_languages',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = CountryLanguage;