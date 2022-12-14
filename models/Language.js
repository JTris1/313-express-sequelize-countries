const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Language extends Model {}

// Initialize the table connected to the attributes
Language.init({
    iso6393_code: {
        type: DataTypes.STRING
    },
    language: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'languages', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    modelName: 'languages',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Language;