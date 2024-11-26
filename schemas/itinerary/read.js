import Joi from 'joi';

const schema = Joi.object({

    id: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id city must be a valid ObjectId (24 hexadecimal characters).',
        'string.hex': 'The id city must be a valid hexadecimal string.',
        'string.length': 'The id city must be exactly 24 characters long.',
        'any.required': 'The id city is required.'
    })
})

export default schema;