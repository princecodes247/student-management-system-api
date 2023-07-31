import mongoose from "mongoose";

export interface ITrade {
  account_id: string;
}

export interface TradeDocument extends ITrade {
  createdAt: Date;
  updatedAt: Date;
}
