const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_folders', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 title: { 
		 type: Sequelize.STRING(40), 
	 allowNull: false 
	}, 
	 description: { 
		 type: Sequelize.STRING(100), 
	}, 
	 id_folder: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
}, { timestamps: true }); 
module.exports = model; 
