import Itinerary from "../../models/Itinerary.js";

const updateByIdItinerary = async (req, res, next) => {
    try {
        let itinerary = req.body        
        let update = await Itinerary.findByIdAndUpdate(
            itinerary._id,
            {
                cityId: itinerary.cityId,
                userPhoto: itinerary.userPhoto,
                userName: itinerary.userName,
                price: itinerary.price,
                duration: itinerary.duration,
                likes: itinerary.likes,
                hashtags: itinerary.hashtags,
                comments: itinerary.hashtags
            },
            { new: true }
        )
        return res.status(200).json({
            response: update
        })
    } catch (error) {
        next(error)
    }

}

export default updateByIdItinerary