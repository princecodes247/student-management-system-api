import { Schema } from "mongoose";
import mongoose from "mongoose";
import { CourseDocument } from "../type";

const CourseSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    unit: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const CourseModel = mongoose.model<CourseDocument>(
  "Course",
  CourseSchema
);
