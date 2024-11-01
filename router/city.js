import { Router } from "express";
import { cities, nameCity, idCity } from "../controllers/city/read.js";
import updateByIdCity from "../controllers/city/update.js";
import deleteCity from "../controllers/city/delete.js";

const router = Router();

router.get("/all", cities);
router.get("/name/:text", nameCity);
router.get("/id/:id", idCity);
router.put("/update",updateByIdCity)
router.delete("/delete/:id", deleteCity)

export default router;
