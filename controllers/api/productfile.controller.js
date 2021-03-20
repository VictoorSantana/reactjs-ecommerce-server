const { Op, Sequelize } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const ProductfileSchema = require('../../database/schemas/productfile.schema');
const { ProductfileModel,ProductModel,FileModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	let include = [];
	ProductfileModel
		.findAndCountAll({
			offset,
			limit,
			order,
			attributes: {exclude, include},
			include: [
			{ model: ProductModel, as: 'Product' }, 
			{ model: FileModel, as: 'File' }, 
			] 
			})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	ProductfileModel
		.findAll({attributes: {exclude}, 
			include: [
			{ model: ProductModel, as: 'Product' }, 
			{ model: FileModel, as: 'File' }, 
			], 
			where: { id }
		})
	.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_product = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_product = isNaN(Number(req.params.id_product)) ? 0 : Number(req.params.id_product);
	ProductfileModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: ProductModel, as: 'Product' }, 
			{ model: FileModel, as: 'File' }, 
			], 
			where: { id_product }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - findById_product'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_file = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_file = isNaN(Number(req.params.id_file)) ? 0 : Number(req.params.id_file);
	ProductfileModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: ProductModel, as: 'Product' }, 
			{ model: FileModel, as: 'File' }, 
			], 
			where: { id_file }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - findById_file'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = ProductfileSchema.validate(req.body);
	if (error === undefined) {
		ProductfileModel
			.create(value)
			.then(result => {
			res.status(201).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		 debug.save(e, 'Productfile - create'); 
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = ProductfileSchema.validate(req.body);
	if (error === undefined) {
		ProductfileModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	ProductfileModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Productfile - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*//*custom*/