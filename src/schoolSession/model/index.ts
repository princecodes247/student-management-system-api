import { Schema } from "mongoose";
import mongoose from "mongoose";
import { SchoolSessionDocument } from "../type";

const SchoolSessionSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const SchoolSessionModel = mongoose.model<SchoolSessionDocument>(
  "SchoolSession",
  SchoolSessionSchema
);
