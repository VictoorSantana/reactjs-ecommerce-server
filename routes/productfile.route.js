module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/productfile.controller');
	app.get('/api/productfile/', verify('listar productfile'), controller.findAll);
	app.get('/api/productfile/:id', verify('destacar productfile'), controller.findOne);
	app.get('/api/productfile/findby/id_product/:id_product', verify('filtrar productfile'), controller.findById_product);
	app.get('/api/productfile/findby/id_file/:id_file', verify('filtrar productfile'), controller.findById_file);
	app.post('/api/productfile/', verify('adicionar productfile'), controller.create);
	app.put('/api/productfile/:id', verify('atualizar productfile'), controller.update);
	app.delete('/api/productfile/:id', verify('deletar productfile'), controller.delete);


/*custom*//*custom*/
}