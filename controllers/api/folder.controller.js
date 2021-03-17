const { Op } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const FolderSchema = require('../../database/schemas/folder.schema');
const { FolderModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	FolderModel
		.findAndCountAll({
			offset,
			limit,
			order,
			attributes: {exclude},
			include: [
			{ model: FolderModel, as: 'Folder' }, 
			] 
			})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	FolderModel
		.findAll({attributes: {exclude}, 
			include: [
			{ model: FolderModel, as: 'Folder' }, 
			], 
			where: { id }
		})
	.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByTitle = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const title = req.params.title;
	FolderModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FolderModel, as: 'Folder' }, 
			], 
			where: { title: { [Op.like]: '%' + title + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - findByTitle'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_folder = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_folder = isNaN(Number(req.params.id_folder)) ? 0 : Number(req.params.id_folder);
	FolderModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FolderModel, as: 'Folder' }, 
			], 
			where: { id_folder }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - findById_folder'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = FolderSchema.validate(req.body);
	if (error === undefined) {
		FolderModel
			.create(value)
			.then(result => {
			res.status(201).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		 debug.save(e, 'Folder - create'); 
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = FolderSchema.validate(req.body);
	if (error === undefined) {
		FolderModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	FolderModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'Folder - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*//*custom*/