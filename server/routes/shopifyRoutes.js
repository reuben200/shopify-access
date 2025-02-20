import express from "express";
import fetchOrders from "../controllers/shopifyController.js";

const router = express.Router();

router.get("/orders", fetchOrders);

export default router;

