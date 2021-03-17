const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  title: Joi.string().max(40).required().messages({'string.base': 'campo "title" deve ser do tipo "texto".',
'string.empty': 'campo "title" não pode ser vazio.',
                    'string.min': 'campo "title" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "title" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "title" é obrigatorio ser preenchido.'
                  })
,
  description: Joi.string().max(40).required().messages({'string.base': 'campo "description" deve ser do tipo "texto".',
'string.empty': 'campo "description" não pode ser vazio.',
                    'string.min': 'campo "description" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "description" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "description" é obrigatorio ser preenchido.'
                  })
,
  price: Joi.number().max(9999).required().messages({'number.base': 'campo "price" deve ser do tipo "decimal".',
'number.empty': 'campo "price" não pode ser vazio.',
                    'number.min': 'campo "price" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "price" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "price" é obrigatorio ser preenchido.'
                  })
,
  amount: Joi.number().integer().max(9999).required().messages({'number.base': 'campo "amount" deve ser do tipo "inteiro".',
'number.empty': 'campo "amount" não pode ser vazio.',
                    'number.min': 'campo "amount" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "amount" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "amount" é obrigatorio ser preenchido.'
                  })
,
  post_at: Joi.date().required().messages({'date.base': 'campo "post_at" deve ser do tipo "data valida".',
'date.empty': 'campo "post_at" não pode ser vazio.',
                    'date.min': 'campo "post_at" deve ter o tamanho minimo de {#limit}',
                    'date.max': 'campo "post_at" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "post_at" é obrigatorio ser preenchido.'
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
