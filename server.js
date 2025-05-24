import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user_profiles.js";

import mongoose from "mongoose"; // Only if using Mongoose

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

app.use("/api/posts", postRoutes);
app.use("/api/user_profiles", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
