import { Router } from "express";
import cityRouter from './city.js'
import itineraryRouter from './itinerary.js'
import authRouter from './auth.js'

const router =Router()

router.use('/city',cityRouter)
router.use('/itinerary',itineraryRouter)
router.use('/auth',authRouter)

export default router