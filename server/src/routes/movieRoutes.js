import express from "express"
import * as movieControllers from "../controllers/movieController.js"

const router = express.Router()

router.post("/", movieControllers.createMovie)

router.get("/", movieControllers.readAllMovie)

router.put("/:id", movieControllers.updateMovie)

router.delete("/:id", movieControllers.deleteMovie)

export default router;

