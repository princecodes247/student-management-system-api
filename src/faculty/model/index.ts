import { Schema } from "mongoose";
import mongoose from "mongoose";
import { FacultyDocument } from "../type";

const FacultySchema = new Schema<FacultyDocument>(
  {
    faculty_name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const FacultyModel = mongoose.model<FacultyDocument>("Trade", FacultySchema);
