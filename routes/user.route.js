module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/user.controller');
	app.get('/api/user/', verify('listar user'), controller.findAll);
	app.get('/api/user/:id', verify('destacar user'), controller.findOne);
	app.get('/api/user/findby/email/:email', verify('filtrar user'), controller.findByEmail);
	app.get('/api/user/findby/name/:name', verify('filtrar user'), controller.findByName);
	app.post('/api/user/', verify('adicionar user'), controller.create);
	app.put('/api/user/:id', verify('atualizar user'), controller.update);
	app.delete('/api/user/:id', verify('deletar user'), controller.delete);


/*custom*/
	app.post('/api/auth/login/', verify('public'), controller.login);
	app.get('/api/auth/me/', verify('public'), controller.me);
	/*custom*/
}