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

//schema
import registerSchema from "../schemas/user/register.js"
import deleteSchema from "../schemas/user/delete.js"
import updateSchema from "../schemas/user/update.js"

const router = Router()
router.get('/all', allUsers)
router.post('/register', validator(registerSchema), createHash, emailExists, cityExists, register)
router.put('/update', validator(updateSchema), createHash, emailExists, cityExists, updateUser)
router.delete('/delete', validator(deleteSchema), deleteUser)

export default router