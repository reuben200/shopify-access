import Wallet from "../models/Wallet.js";

export const getWalletBalance = async (req, res) => {
  const { userId } = req.params;
  try {
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });

    res.json({ balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const rechargeWallet = async (req, res) => {
  const { userId, amount } = req.body;
  try {
    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      wallet = new Wallet({ userId, balance: amount, transactions: [] });
    } else {
      wallet.balance += amount;
      wallet.transactions.push({ amount, type: "credit" });
    }

    await wallet.save();
    res.json({ message: "Wallet recharged", balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
