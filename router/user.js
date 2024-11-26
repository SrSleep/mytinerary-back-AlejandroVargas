import { Router } from "express";

//controller
import register from "../controllers/user/register.js"
import allUsers from "../controllers/user/read.js";
import updateUser from "../controllers/user/update.js";
import deleteUser from "../controllers/user/delete.js";

//middleswares
import validator from "../middlewares/validator.js"
import createHash from "../middlewares/create_hash.js"
import emailExists from "../middlewares/email_exists.js"
import cityExists from "../middlewares/city_exists.js"
import generateToken from "../middlewares/generate_token.js";
import passport from "../middlewares/passport.js";


//schema
import registerSchema from "../schemas/user/register.js"
import deleteSchema from "../schemas/user/delete.js"
import updateSchema from "../schemas/user/update.js"
const router = Router()
router.get('/all', passport.authenticate('jwt', { session: false }), allUsers)
router.post('/register', validator(registerSchema), generateToken, emailExists, cityExists, createHash, register)
router.put('/update', validator(updateSchema), passport.authenticate('jwt', { session: false }), createHash, emailExists, cityExists, updateUser)
router.delete('/delete', validator(deleteSchema), passport.authenticate('jwt', { session: false }), deleteUser)

export default router