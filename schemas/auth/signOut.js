import Joi from 'joi';

const schema = Joi.object({

    email: Joi.string().email().required().messages({
        'string.base': 'Email: must be a string.',
        'string.email': 'Invalid email format.',
        'string.empty': 'Email is required.',
        'any.required': 'The value is required.'
    })
})

export default schema;