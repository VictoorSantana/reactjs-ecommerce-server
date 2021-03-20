const { Op, Sequelize } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const AccessSchema = require('../../database/schemas/access.schema');
const { AccessModel,UserModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	let include = [];
	AccessModel
		.findAndCountAll({
			offset,
			limit,
			order,
			attributes: {exclude, include},
			include: [
			{ model: UserModel, as: 'User' }, 
			] 
			})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	AccessModel
		.findAll({attributes: {exclude}, 
			include: [
			{ model: UserModel, as: 'User' }, 
			], 
			where: { id }
		})
	.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_user = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_user = isNaN(Number(req.params.id_user)) ? 0 : Number(req.params.id_user);
	AccessModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: UserModel, as: 'User' }, 
			], 
			where: { id_user }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - findById_user'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByEndpoint = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const endpoint = req.params.endpoint;
	AccessModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: UserModel, as: 'User' }, 
			], 
			where: { endpoint: { [Op.like]: '%' + endpoint + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - findByEndpoint'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = AccessSchema.validate(req.body);
	if (error === undefined) {
		AccessModel
			.create(value)
			.then(result => {
			res.status(201).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		 debug.save(e, 'Access - create'); 
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = AccessSchema.validate(req.body);
	if (error === undefined) {
		AccessModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	AccessModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Access - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*//*custom*/