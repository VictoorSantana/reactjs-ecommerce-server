const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_files', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 title: { 
		 type: Sequelize.STRING(40), 
	 allowNull: false 
	}, 
	 credit: { 
		 type: Sequelize.STRING(100), 
	}, 
	 hash: { 
		 type: Sequelize.STRING(15), 
	}, 
	 type: { 
		 type: Sequelize.STRING(4), 
	}, 
	 id_folder: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
}, { timestamps: true }); 
module.exports = model; 
