import * as UserControllers from "../controllers/userController.js";

import express from "express";

const router = express.Router();

router.post("/register", UserControllers.register);

export default router;
