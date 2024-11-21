import { Router } from "express"

//Controllers
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js"

//middlewares
import accountExists from "../middlewares/account_exists.js"
import isValidPassword from "../middlewares/is_valid_password.js"
import generateToken from "../middlewares/generate_token.js"
import passport from "../middlewares/passport.js"
import passportGoogle from "../middlewares/passport_google.js"

const router = Router()

router.post('/signin', accountExists, isValidPassword, generateToken, signIn)
router.post('/signout', passport.authenticate('jwt', { session: false }), signOut)

//ruta google
router.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }));
router.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/home' }), generateToken, signIn);


export default router