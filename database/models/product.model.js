const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_products', { 
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
		 type: Sequelize.STRING(40), 
	 allowNull: false 
	}, 
	 price: { 
		 type: Sequelize.DECIMAL(4), 
	 allowNull: false 
	}, 
	 amount: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 post_at: { 
		 type: Sequelize.DATE(6), 
	 allowNull: false 
	}, 
	 id_file: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
