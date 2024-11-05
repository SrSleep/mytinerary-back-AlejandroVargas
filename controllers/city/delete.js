import City from "../../models/City.js";

let deleteCity = async (req, res, next) => {
    try {
        let deleteCityId = await City.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            response: deleteCityId
        })
    } catch (error) {

        next(error)

    }
}

export default deleteCity