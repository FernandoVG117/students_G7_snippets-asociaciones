const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Degree = sequelize.define('degree', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semestres_num: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Degree;