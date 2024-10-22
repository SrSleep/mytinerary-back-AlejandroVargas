import { Router } from "express";
import cityRouter from './city.js'

const router =Router()

router.use('/city',cityRouter)

export default router