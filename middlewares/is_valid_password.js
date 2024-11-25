import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    let password = req.body.password
    let passwordBD = req.user.password
    let isValid = await bcrypt.compare(password, passwordBD)
    if (isValid) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid Credencials"
    })
}