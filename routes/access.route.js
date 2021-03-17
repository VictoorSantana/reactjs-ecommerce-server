module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/access.controller');
	app.get('/api/access/', verify('listar access'), controller.findAll);
	app.get('/api/access/:id', verify('destacar access'), controller.findOne);
	app.get('/api/access/findby/id_user/:id_user', verify('filtrar access'), controller.findById_user);
	app.get('/api/access/findby/endpoint/:endpoint', verify('filtrar access'), controller.findByEndpoint);
	app.post('/api/access/', verify('adicionar access'), controller.create);
	app.put('/api/access/:id', verify('atualizar access'), controller.update);
	app.delete('/api/access/:id', verify('deletar access'), controller.delete);


/*custom*//*custom*/
}