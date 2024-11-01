import { Schema, model } from "mongoose";

let collection = "cities";

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    population: { type: Number, required: true },
    area: { type: Number, required: true },
    timezone: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    language: { type: String, required: true },
    region: { type: String, required: true },
    currency: { type: String, required: true },
    attractions: { type: [String], required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let City = model(collection, citySchema);

export default City;
