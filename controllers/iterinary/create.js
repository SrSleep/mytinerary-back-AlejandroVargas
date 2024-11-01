import Itinerary from "../../models/Itinerary.js"

let createItinerary = async (req, res, next) => {
    try {
        let itinerary = await Itinerary.create(req.body)
        return res.status(201).json({
            itinerary: itinerary
        })
    } catch (error) {
        next(error)
    }
}

export default createItinerary