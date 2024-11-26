import { Router } from "express"

//Controllers
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js"
import validateToken from "../controllers/auth/validate.js"
import signInGoogle from "../controllers/auth/signInGoogle.js"
import validator from "../middlewares/validator.js"

//middlewares
import accountExists from "../middlewares/account_exists.js"
import isValidPassword from "../middlewares/is_valid_password.js"
import generateToken from "../middlewares/generate_token.js"
import passport from "../middlewares/passport.js"
import passportGoogle from "../middlewares/passport_google.js"

//schema
import signInSchema from "../schemas/auth/signIn.js"
import signOutSchema from "../schemas/auth/signOut.js"

const router = Router()

router.get('/validatetoken',passport.authenticate('jwt', { session: false }),validateToken)
router.post('/signin', validator(signInSchema), accountExists, isValidPassword, generateToken, signIn)
router.post('/signout',validator(signOutSchema), passport.authenticate('jwt', { session: false }), signOut)

//ruta google
router.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }));
router.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/home' }), generateToken, signInGoogle);


export default router