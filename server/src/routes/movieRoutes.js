import express from "express";
import * as movieControllers from "../controllers/movieController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), movieControllers.createMovie);

router.get("/", movieControllers.readAllMovie);

router.put("/:id", movieControllers.updateMovie);

router.delete("/:id", movieControllers.deleteMovie);

export default router;
