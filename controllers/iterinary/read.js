import Itinerary from "../../models/Itinerary.js";
// import "../../models/City.js";

let all = async (req, res, next) => {
    try {
        let itineraries = await Itinerary.find();
        return res.status(200).json({
            itineraries: itineraries,
        });
    } catch (error) {
        next(error);
    }
}

let itineraryByCity = async (req, res, next) => {
    try {
        let cityId = req.params.id
        let itineraries = await Itinerary.find({ cityId: cityId }).populate('cityId', 'name').exec();
        return res.status(200).json({
            itineraries: itineraries,
        });
    } catch (error) {
        console.error("Error fetching itineraries:", error);
        next(error);
    }
}


let itineraryById = async (req, res, next) => {
    try {
        let idItinerary = req.params.id
        let itineraries = await Itinerary.findById(idItinerary).populate('cityId', 'name').exec();
        return res.status(200).json({
            itineraries: itineraries,
        });
    } catch (error) {
        console.error("Error fetching itineraries:", error);
        next(error);
    }
}

export { all, itineraryByCity, itineraryById }