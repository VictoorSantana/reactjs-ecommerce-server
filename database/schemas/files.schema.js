const Joi = require('@hapi/joi');

module.exports = Joi.object({
    id_folder: Joi.number().integer().min(-1),
    name: Joi.string().required(),
    type: Joi.string().required(),
    data: Joi.string().required()
});

