import { Router } from "express";
import cityRouter from './city.js'
import itineraryRouter from './itinerary.js'
import authRouter from './auth.js'
import userRouter from './user.js'

const router =Router()

router.use('/city',cityRouter)
router.use('/itinerary',itineraryRouter)
router.use('/auth',authRouter)
router.use('/user',userRouter)

export default router