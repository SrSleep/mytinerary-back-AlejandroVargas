import { Schema, model } from "mongoose";

let collection = "itineraries";

const itinerarySchema = new Schema(
    {
        cityId: { type: Schema.Types.ObjectId, ref: 'cities', required: true },
        title:{type: String, required: true},
        userPhoto: { type: String, required: true },
        userName: { type: String, required: true },
        price: { type: Number, min: 1, max: 5, required: true },
        duration: { type: Number, required: true },
        likes: { type: Number, default: 0, required: true },
        hashtags: { type: [String], required: true },
        comments: { type: String, default: "" },
    },
    {
        timestamps: true,
    }
);

let Itinerary = model(collection, itinerarySchema);

export default Itinerary;