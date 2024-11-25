import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.body.email || req.user.email },
            { online: true }
        );

        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            user: {
                email: req.user.email,
                name: req.user.name,
                lastName: req.user.lastName,
                role: req.user.role,
                photo: req.user.photo
            },
            token: req.token
        }
        );
    } catch (error) {
        next(error);
    }
}