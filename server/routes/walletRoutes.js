import express from "express";
import { getWalletBalance, rechargeWallet } from "../controllers/walletController.js";

const router = express.Router();

router.get("/:userId", getWalletBalance);
router.post("/recharge", rechargeWallet);

export default router;
