const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_productfiles', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 id_product: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 id_file: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
