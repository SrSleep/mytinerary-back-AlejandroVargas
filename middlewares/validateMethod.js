const validateMethod  = (method) => {
    return (req, res, next) => {
        if (!method.includes(req.method)) {
            return res.status(405).json({
                error: `Method ${req.method} not allowed for this route.`,
            });
        }
        next();
    };
};

export default validateMethod