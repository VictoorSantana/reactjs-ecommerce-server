const Sequelize = require('sequelize');
const db = require('../connection');

const model = db.define('tb_products', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_category: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_brand: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,        
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  }, {
    timestamps: false
});

module.exports = model;