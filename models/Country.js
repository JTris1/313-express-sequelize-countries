const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Country extends Model {}

// Initialize the table connected to the attributes
Country.init({
    name: {
        type: DataTypes.STRING
    },
    cca3_code: {
        type: DataTypes.STRING
    },
    capital: {
        type: DataTypes.STRING
    },
    continent: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'countries', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Country;