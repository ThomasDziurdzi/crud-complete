import express from "express";
import dotenv from "dotenv"
import { initDB } from "./utils/db.js";
import movieRoutes from "./routes/movieRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/movies", movieRoutes)

initDB()

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
})