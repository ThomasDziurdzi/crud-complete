import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { log } from "./middlewares/log.js";
import { initDB } from "./utils/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
app.use(
    cors({
        origin: "http://localhost:5174",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(log);

app.use("/api/auth/", userRoutes);
app.use("/api/movies", movieRoutes);

initDB();

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});
