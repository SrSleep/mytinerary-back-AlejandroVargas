import User from "../../models/User.js";

const validatetoken = async (req, res, next) => {
    try {
        return res.status(200).json({
            sucess: true,
            user: req.user
        });
    } catch (error) {
        next(error);
    }

}

export default validatetoken