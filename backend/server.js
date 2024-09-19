import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectDB from "./utils/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
})