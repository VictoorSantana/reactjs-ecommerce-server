const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  title: Joi.string().max(40).required().messages({'string.base': 'campo "title" deve ser do tipo "texto".',
'string.empty': 'campo "title" não pode ser vazio.',
                    'string.min': 'campo "title" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "title" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "title" é obrigatorio ser preenchido.'
                  })
,
  description: Joi.string().max(100).messages({'string.base': 'campo "description" deve ser do tipo "texto".',
'string.empty': 'campo "description" não pode ser vazio.',
                    'string.min': 'campo "description" deve ter o tamanho minimo de {#limit}',
                    'string.max': 'campo "description" deve ter o tamanho maximo de {#limit}',
                    'any.required': 'campo "description" é obrigatorio ser preenchido.'
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
