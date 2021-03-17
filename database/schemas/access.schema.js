const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  id_user: Joi.number().integer().max(9999).required().messages({'number.base': 'campo "id_user" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_user" não pode ser vazio.',
                    'number.min': 'campo "id_user" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_user" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_user" é obrigatorio ser preenchido.'
                  })
,
  endpoint: Joi.string().max(40).required().messages({'string.base': 'campo "endpoint" deve ser do tipo "texto".',
'string.empty': 'campo "endpoint" não pode ser vazio.',
                    'string.min': 'campo "endpoint" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "endpoint" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "endpoint" é obrigatorio ser preenchido.'
                  })
,
}); 
