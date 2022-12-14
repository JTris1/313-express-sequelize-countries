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
    }
}, {
    sequelize,
    tableName: 'countries', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    modelName: 'countries',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Country;