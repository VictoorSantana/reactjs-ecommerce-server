


module.exports = function (app) {

    var controller = require('../controllers/api/files.controller');


    //app.get('/api/files/', controller.findAll);

    //app.get('/api/files/parent/:id', controller.findByParent);

    app.post('/api/files/several/', controller.findSeveral);
    
    app.post('/api/files/', controller.add);

}