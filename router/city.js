import { Router } from "express";
import { cities, nameCity, idCity } from "../controllers/city/read.js";

const router = Router();

router.get("/all", cities);
router.get("/name/:text", nameCity);
router.get("/idcity/:id", idCity);

export default router;
