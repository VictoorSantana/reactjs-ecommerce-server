const BrandSchema = require('../../database/schemas/brands.schema');
const BrandModel = require('../../database/models/brands.model');
exports.findAll = function (req, res) {
    BrandModel
        .findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });
};
exports.findOne = function (req, res) {
    const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
    BrandModel
        .findAll({
            where: { id }
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });
};
exports.create = function (req, res) {
    const { error, value } = BrandSchema.validate(req.body);
    if (error === undefined) {
        BrandModel
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
exports.update = function (req, res) {
    const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
    const { error, value } = BrandSchema.validate(req.body);
    if (error === undefined) {
        BrandModel
            .update(value, {
                where: { id }
            })
            .then(result => {
                res.status(200).send(result);
            })
            .catch(e => {
                res.status(500).send(e.original.sqlMessage || e.original || e);
            });
    } else {
        res.status(500).send(error);
    }
};
exports.delete = function (req, res) {
    const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
    BrandModel
        .destroy({
            where: { id }
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });
};