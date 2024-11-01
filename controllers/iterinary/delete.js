import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
    try {
        let deleteItineraryId = await Itinerary.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            response: deleteItineraryId
        })
    } catch (error) {

        next(error)

    }
}

export default deleteItinerary