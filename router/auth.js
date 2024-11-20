import { Router } from "express"

//Controllers
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js"

//middlewares
import accountExists from "../middlewares/account_exists.js"
import isValidPassword from "../middlewares/is_valid_password.js"
import generateToken from "../middlewares/generate_token.js"
import passport from "../middlewares/passport.js"

const router = Router()

router.post('/signin', accountExists, isValidPassword, generateToken, signIn)
router.post('/signout', passport.authenticate('jwt', { session: false }), signOut)


export default router