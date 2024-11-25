import Joi from 'joi';

const schema = Joi.object({
        name: Joi.string().required().pattern(/^[A-Za-z ]+$/).messages({
        'string.base': 'Name: must be a string.',
        'string.pattern.base': 'Name: must only contain letters (no numbers or special characters).',
        'string.empty': 'Name is required.',
        'any.required': 'Name: value is required.'
    }),

    lastName: Joi.string().required().pattern(/^[A-Za-z ]+$/).messages({
        'string.base': 'Last Name: must be a string.',
        'string.pattern.base': 'Last Name: must only contain letters (no numbers or special characters).',
        'string.empty': 'Last Name is required.',
        'any.required': 'Last Name: required.'
    }),

    email: Joi.string().email().required().messages({
        'string.base': 'Email: must be a string.',
        'string.email': 'Invalid email format.',
        'string.empty': 'Email is required.',
        'any.required': 'The value is required.'
    }),

    password: Joi.string().required().min(8)
        .pattern(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_]+$/) // Asegura que la contraseña tenga caracteres válidos
        .pattern(/[a-z]/) // Al menos una letra minúscula
        .pattern(/[A-Z]/) // Al menos una letra mayúscula
        .pattern(/[0-9]/) // Al menos un número
        .messages({
            'string.base': 'Password must be a string.',
            'string.empty': 'Password is required.',
            'string.min': 'Password must be at least 8 characters long.',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number.',
            'any.required': 'The value is required.'
        }),

    photo: Joi.string().required().messages({
        'string.base': 'Photo must be a string.',
        'string.empty': 'Photo is required.',
        'any.required': 'The value is required.'
    }),

    cityId: Joi.string().hex().length(24).required().messages({
        'string.base': 'The id user must be a valid ObjectId (24 hexadecimal characters).',
        'string.hex': 'The id user must be a valid hexadecimal string.',
        'string.length': 'The id user must be exactly 24 characters long.',
        'any.required': 'The id user is required.'
    })
})

export default schema;