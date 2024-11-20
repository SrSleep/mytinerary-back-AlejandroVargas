import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let emailExists = await User.findOne({ email: req.body.email })
        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            })
        }
        next()        
    } catch (error) {
        next(error)
    }
}