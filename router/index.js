import { Router } from "express";
import cityRouter from './city.js'
import itineraryRouter from './itinerary.js'

const router =Router()

router.use('/city',cityRouter)
router.use('/itinerary',itineraryRouter)

export default router