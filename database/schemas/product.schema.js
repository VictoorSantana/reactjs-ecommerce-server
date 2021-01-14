
const Joi = require('@hapi/joi');

module.exports = Joi.object({
    brand: Joi.number().integer().min(0),
    category: Joi.number().integer().min(0),
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.number().integer().min(0).max(1),
    units: Joi.number().integer().min(0),
    unitsBuy: Joi.number().required(),
    unitsSell: Joi.number().required(),
    attachments: Joi.array().items(Joi.number()),
});

