


const ProductSchema = require('../../database/schemas/product.schema');
const ProductModel = require('../../database/models/product.model');
const VWProductModel = require('../../database/models/vwProduct.model');
const ProductValueModel = require('../../database/models/products_values.model');
const Attachments = require('../../database/models/attachments.model');

exports.findAll = function (req, res) {

    ProductModel
        .findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });

};

exports.findOne = function (req, res) {
    const id_product = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);

    VWProductModel
        .findAll({
            where: { id: id_product }
        })
        .then(product => {

            Attachments
            .findAll({
                where: { id_product }
            })
            .then(attachments => {
                res.status(200).send({
                    product: product[0],
                    attachments: attachments
                });
            })
            .catch(e => {
                res.status(500).send(e.original.sqlMessage || e.original || e);
            });
            
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });

};



exports.add = function (req, res) {

    const { error, value } = ProductSchema.validate(req.body);

    //console.log(error);
    if (error === undefined) {
        ProductModel
            .create({
                id_category: value.category,
                id_brand: value.brand,
                title: value.title,
                description: value.description,
                status: value.status,
            })
            .then(product => {
                let newProductId = product.dataValues.id;
                ProductValueModel
                    .create({
                        id_product: newProductId,
                        units: value.units,
                        unit_buy: value.unitsBuy,
                        unit_sell: value.unitsSell
                    })
                    .then(productValue => {

                        let attachList = [];

                        for (var i = 0; i < value.attachments.length; i++) {
                            attachList.push({
                                id_product: newProductId,
                                id_file: value.attachments[i]
                            });
                        }

                        Attachments
                            .bulkCreate(attachList)
                            .then(result => {
                                res.status(200).send(result);
                            })
                            .catch(e => {
                                res.status(500).send(e);
                            });


                    })
                    .catch(e => {
                        res.status(500).send(e);
                    });
            })
            .catch(e => {
                res.status(500).send(e);
            });
    } else {
        res.status(500).send(error);
    }

};