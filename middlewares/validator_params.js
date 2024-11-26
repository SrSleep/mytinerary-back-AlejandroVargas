const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.params, { abortEarly: false });
        console.log(validation)
        
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => ({
                    message: error.message
                }))
            });
        }
        next();
    }
]

export default validator