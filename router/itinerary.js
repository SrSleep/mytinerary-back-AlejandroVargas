import { Router } from "express";

//controllers
import { all, itineraryByCity, itineraryById } from "../controllers/iterinary/read.js";
import createItinerary from "../controllers/iterinary/create.js";
import updateByIdItinerary from "../controllers/iterinary/update.js";
import deleteItinerary from "../controllers/iterinary/delete.js";

//miiddlewares
import validatorParams from "../middlewares/validator_params.js";
import validator from "../middlewares/validator.js";

//schema
import itineraryParamsSchema from "../schemas/itinerary/read.js"
import createSchema from "../schemas/itinerary/create.js"
import updateSchema from "../schemas/itinerary/update.js"

const router = Router()

router.get('/all', all);
router.get('/cityItineraries/:id', validatorParams(itineraryParamsSchema), itineraryByCity);
router.get('/id/:id', validatorParams(itineraryParamsSchema), itineraryById);
router.post('/create', validator(createSchema), createItinerary);
router.put('/update', validator(updateSchema), updateByIdItinerary);
router.delete('/delete/:id', validatorParams(itineraryParamsSchema), deleteItinerary);

export default router