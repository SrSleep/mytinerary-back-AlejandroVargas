import { Router } from "express";
import { all, itineraryByCity, itineraryById } from "../controllers/iterinary/read.js";
import createItinerary from "../controllers/iterinary/create.js";
import updateByIdItinerary from "../controllers/iterinary/update.js";
import deleteItinerary from "../controllers/iterinary/delete.js";

const router = Router()

router.get('/all', all);
router.get('/cityItineraries/:id', itineraryByCity);
router.get('/id/:id', itineraryById);
router.post('/create', createItinerary);
router.put('/update', updateByIdItinerary);
router.delete('/delete/:id', deleteItinerary);

export default router