import City from "../models/City.js";

export default async (req, res, next) => {
    try {
        let cityExists = await City.findOne({ _id: req.body.cityId })
        if (!cityExists) {
            return res.status(400).json({
                success: false,
                message: "City does not exist"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}