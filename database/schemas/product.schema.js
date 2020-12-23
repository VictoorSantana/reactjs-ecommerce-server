
const Joi = require('@hapi/joi');

module.exports = Joi.object({
    id_category: Joi.number().integer().min(0),
    id_brand: Joi.number().integer().min(0),
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.number().integer().min(0).max(1),
});