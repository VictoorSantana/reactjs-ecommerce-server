const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  id_product: Joi.number().integer().max(9999).required().messages({'number.base': 'campo "id_product" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_product" não pode ser vazio.',
                    'number.min': 'campo "id_product" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_product" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_product" é obrigatorio ser preenchido.'
                  })
,
  id_file: Joi.number().integer().max(9999).required().messages({'number.base': 'campo "id_file" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_file" não pode ser vazio.',
                    'number.min': 'campo "id_file" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_file" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_file" é obrigatorio ser preenchido.'
                  })
,
}); 
