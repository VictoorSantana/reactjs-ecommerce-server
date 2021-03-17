const { Op } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const ProductSchema = require('../../database/schemas/product.schema');
const { ProductModel,FileModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	ProductModel
		.findAndCountAll({
			offset,
			limit,
			order,
			attributes: {exclude},
			include: [
			{ model: FileModel, as: 'File' }, 
			] 
			})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	ProductModel
		.findAll({attributes: {exclude}, 
			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { id }
		})
	.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByTitle = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const title = req.params.title;
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { title: { [Op.like]: '%' + title + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findByTitle'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByDescription = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const description = req.params.description;
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { description: { [Op.like]: '%' + description + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findByDescription'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByPrice = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const price = isNaN(Number(req.params.price)) ? 0 : Number(req.params.price);
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { price }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findByPrice'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByAmount = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const amount = isNaN(Number(req.params.amount)) ? 0 : Number(req.params.amount);
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { amount }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findByAmount'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByPost_at = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const post_at = isNaN(Number(req.params.post_at)) ? 0 : Number(req.params.post_at);
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { post_at }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findByPost_at'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_file = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_file = isNaN(Number(req.params.id_file)) ? 0 : Number(req.params.id_file);
	ProductModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { id_file }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - findById_file'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = ProductSchema.validate(req.body);
	if (error === undefined) {
		ProductModel
			.create(value)
			.then(result => {
			res.status(201).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		 debug.save(e, 'Product - create'); 
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = ProductSchema.validate(req.body);
	if (error === undefined) {
		ProductModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	ProductModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Product - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*//*custom*/