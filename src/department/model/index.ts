import { Schema } from "mongoose";
import mongoose from "mongoose";
import { DepartmentDocument } from "../type";

const DepartmentSchema = new Schema<DepartmentDocument>(
  {
    faculty_id: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
    department_name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const DepartmentModel = mongoose.model<DepartmentDocument>(
  "Department",
  DepartmentSchema
);
