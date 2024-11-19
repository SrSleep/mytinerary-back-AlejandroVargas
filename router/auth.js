import {Router} from "express"

//Controllers
import signIn from "../controllers/auth/signIn"

//middlewares
import accountExists from "../middlewares/accountExists.js"

const router = Router ()

router.post('/signin',accountExists, signIn)


export default router