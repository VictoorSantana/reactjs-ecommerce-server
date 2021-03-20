const { Op, Sequelize } = require('sequelize');
const debug = require('../../utils/debug');
const headerSet = require('../../utils/functions/headerSet');
const UserSchema = require('../../database/schemas/user.schema');
const { UserModel,FileModel } = require('../../database/models/models');
exports.findAll = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	let include = [];
	exclude.push('password');
	exclude.push('id_status');
	include.push([Sequelize.literal('CASE  WHEN id_status = 2 THEN "Suspenso"  WHEN id_status = 1 THEN "Ativo"  WHEN id_status = 0 THEN "Inativo"  END'), 'id_status']);	UserModel
		.findAndCountAll({
			offset,
			limit,
			order,
			attributes: {exclude, include},
			include: [
			{ model: FileModel, as: 'File' }, 
			] 
			})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'User - findAll'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	let exclude = [];
	exclude.push('password');
	UserModel
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
		 debug.save(e, 'User - findOne'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByEmail = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const email = req.params.email;
	UserModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { email: { [Op.like]: '%' + email + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'User - findByEmail'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByName = function (req, res) {
	let { offset, limit, order } = headerSet.getItems(req.headers);
	let exclude = [];
	const name = req.params.name;
	UserModel
		.findAndCountAll({
			offset, limit, order, attributes: {exclude},			include: [
			{ model: FileModel, as: 'File' }, 
			], 
			where: { name: { [Op.like]: '%' + name + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'User - findByName'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = UserSchema.validate(req.body);
	if (error === undefined) {
		UserModel
			.create(value)
			.then(result => {
			res.status(201).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		 debug.save(e, 'User - create'); 
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = UserSchema.validate(req.body);
	if (error === undefined) {
		UserModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'User - update'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	UserModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
		 debug.save(e, 'User - delete'); 
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*/
const jwt = require('jsonwebtoken');
const AccessModel = require('../../database/models/access.model');

exports.login = function (req, res) {

	if (!(req.body.email || req.body.password)) {
		res.status(401).json('Email and password needed!');
	} else {

		const email = req.body.email ? req.body.email : '-1';
		const password = req.body.password ? req.body.password : '-1';

		UserModel
			.findAll({
				attributes: ['id', 'email', 'name'],
				where: { email, password },
				include: [
					{ model: FileModel, as: 'File' },
				]
			})
			.then(result => {
				if (result.length > 0) {

					const token = jwt.sign({ _id: result[0].id }, process.env.SERVER_KEY, { expiresIn: process.env.SERVER_EXPIRES });


					AccessModel
						.findAll({
							where: { id_user: result[0].id }
						})
						.then(resultAccess => {
							//res.status(200).json(resultAccess);

							res.status(200).json({
								token,
								photo: result[0].File,
								email: result[0].email,
								name: result[0].name,
								access: resultAccess
							});
							return;

						})
						.catch(e => {
							console.log(e);
							//res.status(500).json(e.original.sqlMessage || e.original || e);
						});

				} else {
					res.status(401).json('Sorry, wrong password!');
				}

			})
			.catch(e => {
				console.log(e);
				res.status(500).json(e.original.sqlMessage || e.original || e);
			});
	}
};

exports.me = function (req, res) {
	UserModel
		.findAll({
			attributes: ['email', 'name'],
			where: { id: isNaN(Number(req.decoded)) ? '-1' : Number(req.decoded) }
		})
		.then(result => {
			if (result.length > 0) {
				res.status(200).send({
					email: result[0].email,
					name: result[0].name
				});
			} else {
				res.status(500).send('User no longer exists...');
			}

		})
		.catch(e => {
			console.log(e);
			//res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
/*custom*/