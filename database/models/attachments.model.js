const Sequelize = require('sequelize');
const db = require('../connection');

const model = db.define('tb_attachments', {
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
    id_file: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = model;