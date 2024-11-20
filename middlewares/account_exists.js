import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let usersExists = await User.findOne({ email: req.body.email })
        if (usersExists) {
            req.user = {
                email: usersExists.email,
                password: usersExists.password,
                role: usersExists.role,
                photo: usersExists.photo

            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })
    } catch (error) {
        next(error)
    }
}