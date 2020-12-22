


module.exports = function (app) {

    var controller = require('../controllers/api/product.controller');

    app.get('/api/product/', controller.findAll);

}