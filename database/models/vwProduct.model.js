const Sequelize = require('sequelize');
const db = require('../connection');

const model = db.define('vw_products', {
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
    id_status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,        
    },
    units: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    unit_buy: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    unit_sell: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }    
  }, {
    timestamps: false
});

module.exports = model;