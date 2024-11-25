import Joi from 'joi';

const schema = Joi.object({
    _id: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id user must be a valid ObjectId (24 hexadecimal characters).',
        'string.hex': 'The id user must be a valid hexadecimal string.',
        'string.length': 'The id user must be exactly 24 characters long.',
        'any.required': 'The id user is required.'
    })
})

export default schema;