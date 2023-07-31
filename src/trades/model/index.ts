import { Schema } from "mongoose";
import mongoose from "mongoose";
import { TradeDocument } from "../type";

const TradeSchema = new Schema<TradeDocument>(
  {
    account_id: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const TradeModel = mongoose.model<TradeDocument>("Trade", TradeSchema);
