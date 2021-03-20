module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/folder.controller');
	app.get('/api/folder/', verify('listar folder'), controller.findAll);
	app.get('/api/folder/:id', verify('destacar folder'), controller.findOne);
	app.get('/api/folder/findby/title/:title', verify('filtrar folder'), controller.findByTitle);
	app.get('/api/folder/findby/id_folder/:id_folder', verify('filtrar folder'), controller.findById_folder);
	app.post('/api/folder/', verify('adicionar folder'), controller.create);
	app.put('/api/folder/:id', verify('atualizar folder'), controller.update);
	app.delete('/api/folder/:id', verify('deletar folder'), controller.delete);


/*custom*/
	app.get('/api/folder/custom/foldernfiles/:id', verify('attach'), controller.foldersAndFiles);
/*custom*/
}