


module.exports = function (app) {

    var controller = require('../controllers/api/product.controller');
    
    app.get('/api/product/:id', controller.findOne);

    app.get('/api/product/', controller.findAll);

    app.post('/api/product/', controller.add);
    
}