import { Schema, model } from "mongoose";

let collection = "users";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
        cityId: { type: Schema.Types.ObjectId, ref: 'cities', required: true },
        online: { type: Boolean, required: true },
        role: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

let User = model(collection, userSchema);

export default User;
