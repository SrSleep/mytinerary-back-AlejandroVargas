import {Router} from "express";

//controller
import register from "../controllers/user/register.js"
import allUsers from "../controllers/user/read.js";

//middleswares
 import validator from "../middlewares/validator.js"
 import createHash from "../middlewares/create_hash.js"
 import emailExists from "../middlewares/email_exists.js"

 //schema
 import registerSchema from "../schemas/user/register.js"

const router = Router()
router.get('/all',allUsers)
 router.post('/register',validator(registerSchema),createHash,emailExists,register)



 export default router