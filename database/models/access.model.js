const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_access', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 id_user: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 endpoint: { 
		 type: Sequelize.STRING(40), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
