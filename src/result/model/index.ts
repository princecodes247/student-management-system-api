import { Schema } from "mongoose";
import mongoose from "mongoose";
import { ResultDocument } from "../type";

const courseScoreSchema = new Schema({
  course: { ref: "Course", type: Schema.Types.ObjectId, required: true },
  score: { type: Number, required: true },
  points: { type: Number, required: true },
});

const ResultSchema = new Schema(
  {
    // result_id: { type: String, required: true, unique: true },

    user: { ref: "User", type: Schema.Types.ObjectId, required: true },
    courses: [courseScoreSchema],
    session: { ref: "Session", type: Schema.Types.ObjectId, required: true },
    semester: { enum: ["first", "second"], type: String, required: true },
  },
  { timestamps: true }
);

export const ResultModel = mongoose.model<ResultDocument>(
  "Result",
  ResultSchema
);
