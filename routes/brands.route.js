


module.exports = function (app) {
    var controller = require('../controllers/api/brand.controller');
    app.get('/api/brands/', controller.findAll);
    app.get('/api/brands/:id', controller.findOne);
    app.post('/api/brands/', controller.create);
    app.put('/api/brands/:id', controller.update);
    app.delete('/api/brands/:id', controller.delete);
}