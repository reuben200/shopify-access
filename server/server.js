import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import shopifyRoutes from "./routes/shopifyRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/shopify", shopifyRoutes);
app.use("/api/wallet", walletRoutes);

connectDB()
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
