import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY_JWT,
        },
        async (payload, done) => {
            console.log(payload);
            
            try {
                let user = await User.findOne({ email: payload.email, online: true });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                return done(error, false);
            }
        }
    )
);