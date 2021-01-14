


const CategorySchema = require('../../database/schemas/category.schema');
const CategoryModel = require('../../database/models/category.model');

exports.findAll = function (req, res) {
    CategoryModel
        .findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e );
        });
};

exports.add = function (req, res) {

    const { error, value } = CategorySchema.validate(req.body);

    //console.log(error);
    if (error === undefined) {
        CategoryModel
            .create(value)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(e => {
                res.status(500).send(e);
            });
    } else {
        res.status(500).send(error);
    }

};