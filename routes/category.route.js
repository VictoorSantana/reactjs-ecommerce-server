

module.exports = function (app) {

    var controller = require('../controllers/api/category.controller');


    app.get('/api/category/', controller.findAll);
    
    app.post('/api/category/', controller.add);

}