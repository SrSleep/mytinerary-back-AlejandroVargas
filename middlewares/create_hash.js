import bcrypt from 'bcryptjs';

export default (req, res, next) => {
    let password = req.body.password
    let hashpassword = bcrypt.hashSync(password, 10)
    req.body.password = hashpassword
    return next()
}