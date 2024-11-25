import { token } from "morgan";
import User from "../../models/User.js";

let registerUser = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = true;
        user.role = "user";

        let created = await User.create(user);
        return res.status(201).json({
            user: created,
            token: req.token
        })
    } catch (error) {
        next(error);
    }
}

export default registerUser