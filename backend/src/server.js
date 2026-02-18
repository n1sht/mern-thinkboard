import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./configs/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON bodies, added before the routes to ensure it applies to all routes

// app.use((req, res, next) => {
//   console.log("we just got a new req");
//   next();
// });

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port 5001");
  });
});
