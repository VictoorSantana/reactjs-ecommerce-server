


const ProductSchema = require('../../database/schemas/product.schema');
const ProductModel = require('../../database/models/product.model');

exports.findAll = function (req, res) {

    ProductModel
        .findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e );
        });

};



exports.add = function (req, res) {

    const { error, value } = ProductSchema.validate(req.body);

    //console.log(error);
    if (error === undefined) {
        ProductModel
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