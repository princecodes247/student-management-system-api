import { Schema } from "mongoose";
import mongoose from "mongoose";
import { EnrollmentDocument } from "../type";
import { Semester } from "../../schoolSession/type";

const EnrollmentSchema = new Schema(
  {
    // result_id: { type: String, required: true, unique: true },

    user: { ref: "User", type: Schema.Types.ObjectId, required: true },
    courses: [{ ref: "Course", type: Schema.Types.ObjectId, required: true }],
    session: {
      ref: "SchoolSession",
      type: Schema.Types.ObjectId,
      required: true,
    },

    semester: {
      enum: Object.values(Semester),
      type: String,
      default: Semester.first,
    },
  },
  { timestamps: true }
);

export const EnrollmentModel = mongoose.model<EnrollmentDocument>(
  "Enrollment",
  EnrollmentSchema
);
