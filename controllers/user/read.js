import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let { name, lastName, email, role } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (lastName) {
            query.lastName = { $regex: lastName, $options: "i" };
        }
        if (email) {
            query.email = { $regex: email, $options: "i" };
        }
        if (role) {
            query.role = { $regex: role, $options: "i" };
        }
        let all = await User.find(query);
        return res.status(200).json({
            response: all,
        });

    } catch (error) {
        next(error);
    }
}

export default allUsers