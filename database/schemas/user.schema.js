const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  email: Joi.string().max(30).required().messages({'string.base': 'campo "email" deve ser do tipo "texto".',
'string.empty': 'campo "email" não pode ser vazio.',
                    'string.min': 'campo "email" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "email" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "email" é obrigatorio ser preenchido.'
                  })
,
  name: Joi.string().max(40).required().messages({'string.base': 'campo "name" deve ser do tipo "texto".',
'string.empty': 'campo "name" não pode ser vazio.',
                    'string.min': 'campo "name" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "name" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "name" é obrigatorio ser preenchido.'
                  })
,
  id_file: Joi.number().integer().max(9999).messages({'number.base': 'campo "id_file" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_file" não pode ser vazio.',
                    'number.min': 'campo "id_file" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_file" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_file" é obrigatorio ser preenchido.'
                  })
,
  password: Joi.string().max(20).required().messages({'string.base': 'campo "password" deve ser do tipo "texto".',
'string.empty': 'campo "password" não pode ser vazio.',
                    'string.min': 'campo "password" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "password" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "password" é obrigatorio ser preenchido.'
                  })
,
  id_status: Joi.number().integer().max(9).messages({'number.base': 'campo "id_status" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_status" não pode ser vazio.',
                    'number.min': 'campo "id_status" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_status" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_status" é obrigatorio ser preenchido.'
                  })
,
}); 
