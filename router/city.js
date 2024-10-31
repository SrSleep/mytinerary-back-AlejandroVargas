import { Router } from "express";
import { cities, nameCity, idCity } from "../controllers/city/read.js";
import updateById from "../controllers/city/update.js";
import deleteCity from "../controllers/city/delete.js";

const router = Router();

router.get("/all", cities);
router.get("/name/:text", nameCity);
router.get("/idcity/:id", idCity);
router.put("/updateCity",updateById)
router.delete("/deleteCity/:id", deleteCity)

export default router;
