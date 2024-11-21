import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const { email, _id } = req.body;

        if (_id) {
            let emailExists = await User.findOne({
                email: email,
                _id: { $ne: _id }  // Excluir al usuario actual de la búsqueda
            });

            if (emailExists) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists"
                });
            }
        } else {

            let emailExists = await User.findOne({ email: email });

            if (emailExists) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists"
                });
            }
        }
        next();
    } catch (error) {
        next(error);
    }
};
