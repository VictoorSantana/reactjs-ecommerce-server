module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/product.controller');
	app.get('/api/product/', verify('listar product'), controller.findAll);
	app.get('/api/product/:id', verify('destacar product'), controller.findOne);
	app.get('/api/product/findby/title/:title', verify('filtrar product'), controller.findByTitle);
	app.get('/api/product/findby/description/:description', verify('filtrar product'), controller.findByDescription);
	app.get('/api/product/findby/price/:price', verify('filtrar product'), controller.findByPrice);
	app.get('/api/product/findby/amount/:amount', verify('filtrar product'), controller.findByAmount);
	app.get('/api/product/findby/post_at/:post_at', verify('filtrar product'), controller.findByPost_at);
	app.get('/api/product/findby/id_file/:id_file', verify('filtrar product'), controller.findById_file);
	app.post('/api/product/', verify('adicionar product'), controller.create);
	app.put('/api/product/:id', verify('atualizar product'), controller.update);
	app.delete('/api/product/:id', verify('deletar product'), controller.delete);


/*custom*//*custom*/
}