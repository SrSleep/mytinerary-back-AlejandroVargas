import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import bycrypt from "bcryptjs";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    let hashPassword = bycrypt.hashSync(profile.id, 10);
                    user = new User({
                        name: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: hashPassword,
                        photo: profile.photos[0].value,
                        cityId: "672430ef4a985393f95ead88",
                        online: true,
                        role: "user"
                    })
                    await user.save();
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
                
            }
        }
    )
)