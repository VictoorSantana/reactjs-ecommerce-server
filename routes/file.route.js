module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/file.controller');
	app.get('/api/file/', verify('listar file'), controller.findAll);
	app.get('/api/file/:id', verify('destacar file'), controller.findOne);
	app.get('/api/file/findby/title/:title', verify('filtrar file'), controller.findByTitle);
	app.get('/api/file/findby/filetarget/:filetarget', verify('filtrar file'), controller.findByFiletarget);
	app.get('/api/file/findby/id_folder/:id_folder', verify('filtrar file'), controller.findById_folder);
	app.post('/api/file/', verify('adicionar file'), controller.create);
	app.put('/api/file/:id', verify('atualizar file'), controller.update);
	app.delete('/api/file/:id', verify('deletar file'), controller.delete);


/*custom*/
	app.post('/api/file/custom/upload', verify('upload file'), controller.upload);
	/*custom*/
}