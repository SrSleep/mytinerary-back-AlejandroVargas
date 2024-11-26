import Joi from 'joi';

const itinerarySchema = Joi.object({
    cityId: Joi.string().hex().length(24).required().messages({
        'string.base': 'City ID must be a string.',
        'string.hex': 'City ID must be a valid hexadecimal string.',
        'string.length': 'City ID must be exactly 24 characters long.',
        'any.required': 'City ID is required.'
    }),

    title: Joi.string().min(3).max(100).required().messages({
        'string.base': 'Title must be a string.',
        'string.min': 'Title must be at least 3 characters long.',
        'string.max': 'Title must not exceed 100 characters.',
        'any.required': 'Title is required.'
    }),

    userPhoto: Joi.string().uri().required().messages({
        'string.base': 'User photo URL must be a string.',
        'string.uri': 'User photo must be a valid URL.',
        'any.required': 'User photo URL is required.'
    }),

    userName: Joi.string().min(3).max(50).required().messages({
        'string.base': 'User name must be a string.',
        'string.min': 'User name must be at least 3 characters long.',
        'string.max': 'User name must not exceed 50 characters.',
        'any.required': 'User name is required.'
    }),

    price: Joi.number().integer().min(0).required().messages({
        'number.base': 'Price must be a number.',
        'number.integer': 'Price must be an integer.',
        'number.min': 'Price must be at least 0.',
        'any.required': 'Price is required.'
    }),

    duration: Joi.number().integer().min(1).required().messages({
        'number.base': 'Duration must be a number.',
        'number.integer': 'Duration must be an integer.',
        'number.min': 'Duration must be at least 1 hour.',
        'any.required': 'Duration is required.'
    }),

    likes: Joi.number().integer().min(0).default(0).messages({
        'number.base': 'Likes must be a number.',
        'number.integer': 'Likes must be an integer.',
        'number.min': 'Likes cannot be less than 0.'
    }),

    hashtags: Joi.array().items(Joi.string().min(1).max(10)).optional().messages({
        'array.base': 'Hashtags must be an array of strings.',
        'string.min': 'Each hashtag must be at least 1 character long.',
        'string.max': 'Each hashtag must not exceed 30 characters.'
    }),

    comments: Joi.string().max(500).optional().messages({
        'string.base': 'Comments must be a string.',
        'string.max': 'Comments must not exceed 500 characters.'
    })
});

export default itinerarySchema;
