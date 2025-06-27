const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pair: { type: String, required: true },          // e.g. BTCUSD
  type: { type: String, enum: ["buy", "sell"], required: true },
  lots: { type: Number, required: true },
  openPrice: { type: Number, required: true },
  closePrice: { type: Number },
  profitLoss: { type: Number },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  openTime: { type: Date, default: Date.now },
  closeTime: { type: Date },
  closedBy: { type: String }, // admin email or id who closed trade (optional)
}, { timestamps: true });

module.exports = mongoose.model("Trade", tradeSchema);
