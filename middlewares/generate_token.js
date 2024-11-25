import jwt from "jsonwebtoken";

export default async (req, res, next) => {
    const token = jwt.sign(
        {email:req.body.email || req.user.email}  ,      
        process.env.SECRET_KEY_JWT,
        { expiresIn: "3days" }
    )
    req.token = token
    return next()
}