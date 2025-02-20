import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  transactions: [
    {
      amount: Number,
      type: { type: String, enum: ["credit", "debit"] },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Wallet = mongoose.model("Wallet", walletSchema);

export default Wallet;
