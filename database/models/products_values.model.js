const Sequelize = require('sequelize');
const db = require('../connection');

const model = db.define('tb_products_values', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    units: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    unit_buy: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    unit_sell: {
        type: Sequelize.DECIMAL,        
    }
  }, {
    timestamps: false
});

module.exports = model;