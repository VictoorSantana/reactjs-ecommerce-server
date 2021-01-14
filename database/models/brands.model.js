
const Sequelize = require('sequelize');
const db = require('../connection');

const model = db.define('tb_brands', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = model;