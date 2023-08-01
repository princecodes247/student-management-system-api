import { Schema } from "mongoose";
import mongoose from "mongoose";
import { FacultyDocument } from "../type";

const FacultySchema = new Schema<FacultyDocument>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const FacultyModel = mongoose.model<FacultyDocument>(
  "Faculty",
  FacultySchema
);
