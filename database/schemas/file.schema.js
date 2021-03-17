const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  title: Joi.string().max(40).required().messages({'string.base': 'campo "title" deve ser do tipo "texto".',
'string.empty': 'campo "title" não pode ser vazio.',
                    'string.min': 'campo "title" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "title" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "title" é obrigatorio ser preenchido.'
                  })
,
  credit: Joi.string().max(100).messages({'string.base': 'campo "credit" deve ser do tipo "texto".',
'string.empty': 'campo "credit" não pode ser vazio.',
                    'string.min': 'campo "credit" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "credit" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "credit" é obrigatorio ser preenchido.'
                  })
,
  hash: Joi.string().max(15).messages({'string.base': 'campo "hash" deve ser do tipo "texto".',
'string.empty': 'campo "hash" não pode ser vazio.',
                    'string.min': 'campo "hash" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "hash" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "hash" é obrigatorio ser preenchido.'
                  })
,
  type: Joi.string().max(4).messages({'string.base': 'campo "type" deve ser do tipo "texto".',
'string.empty': 'campo "type" não pode ser vazio.',
                    'string.min': 'campo "type" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "type" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "type" é obrigatorio ser preenchido.'
                  })
,
  filetarget: Joi.string().messages({'string.base': 'campo "filetarget" deve ser do tipo "arquivo".',
'string.empty': 'campo "filetarget" não pode ser vazio.',
                    'string.min': 'campo "filetarget" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "filetarget" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "filetarget" é obrigatorio ser preenchido.'
                  })
,
  id_folder: Joi.number().integer().max(9999).required().messages({'number.base': 'campo "id_folder" deve ser do tipo "inteiro".',
'number.empty': 'campo "id_folder" não pode ser vazio.',
                    'number.min': 'campo "id_folder" deve ter o tamanho minimo de {#limit}',
                    'number.max': 'campo "id_folder" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "id_folder" é obrigatorio ser preenchido.'
                  })
,
}); 
