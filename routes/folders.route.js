


module.exports = function (app) {

    var controller = require('../controllers/api/folders.controller');
    
    app.get('/api/folders/', controller.findAll);

    app.get('/api/folders/parent/:id', controller.findByParent);

    app.post('/api/folders/', controller.add);
    
}