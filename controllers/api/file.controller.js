const { Op } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const FileSchema = require('../../database/schemas/file.schema');
const { FileModel,FolderModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	FileModel
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
		 debug.save(e, 'File - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	FileModel
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
		 debug.save(e, 'File - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByTitle = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const title = req.params.title;
	FileModel
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
		 debug.save(e, 'File - findByTitle'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByFiletarget = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const filetarget = isNaN(Number(req.params.filetarget)) ? 0 : Number(req.params.filetarget);
	FileModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FolderModel, as: 'Folder' }, 
			], 
			where: { filetarget }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'File - findByFiletarget'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findById_folder = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const id_folder = isNaN(Number(req.params.id_folder)) ? 0 : Number(req.params.id_folder);
	FileModel
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
		 debug.save(e, 'File - findById_folder'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};

exports.create = function (req, res) {
	let { error, value } = FileSchema.validate(req.body);
	if (error === undefined) {

		if (!req.files) {
			res.status(400).json('file is needed');
			return;
		}

		 let { type, hash, ok, msg } = headerSet.saveFile(req.files, 'filetarget');
		if(!ok) {
		res.status(400).send(msg);
		return;
		}
		
		value.hash = hash;
		value.type = type;

		FileModel
			.create(value)
			.then(result => {
				res.status(200).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
			});
	} else {
		res.status(500).json(error);
	}
};exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = FileSchema.validate(req.body);
	if (error === undefined) {
		FileModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'File - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	FileModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'File - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*/
exports.upload = function (req, res) {
	let { error, value } = FileSchema.validate(req.body);
	if (error === undefined) {

		console.log(req.files);
		if (!req.files) {
			res.status(400).json('file is needed');
			return;
		}

		value.hash = new Date().getTime();
		let day = new Date().getUTCDate();
		let month = new Date().getMonth() + 1;
		let year = new Date().getFullYear();

		let filetarget = req.files.filetarget;

		try {
			value.type = filetarget.mimetype.split('/')[1];
			value.type = value.type == 'jpeg' ? 'jpg' : value.type;

			if (value.type != 'png' && value.type != 'jpg') {
				res.status(400).json('invalid type(' + value.type + ') extension.');
				return;
			}
		} catch (e) {
			res.status(400).json('type not valid');
			return;
		}

		filetarget.mv('./public/storage/files/images/' + year + '/' + month + '/' + day + '/' + value.hash + '.' + value.type);

		FileModel
			.create(value)
			.then(result => {
				res.status(200).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
			});
	} else {
		res.status(500).json(error);
	}
};
/*custom*/