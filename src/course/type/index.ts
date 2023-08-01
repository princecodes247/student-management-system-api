import mongoose from "mongoose";

export interface ICourse {
  _id: mongoose.Types.ObjectId;
  code: String;
  title: String;
  description: String;
  unit: Number;
}

export interface CourseDocument extends ICourse {
  createdAt: Date;
  updatedAt: Date;
}
