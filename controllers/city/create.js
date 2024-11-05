import City from "../../models/City.js"

let createCity = async (req, res, next) => {
    try {
        let city = await City.create(req.body)
        return res.status(201).json({
            city: city
        })
    } catch (error) {
        next(error)
    }
}

export default createCity