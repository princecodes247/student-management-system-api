import mongoose from "mongoose";
import { Semester } from "../../schoolSession/type";

export interface IResult {
  user: mongoose.Types.ObjectId;
  courses: ICourseScore[];
  session: mongoose.Types.ObjectId;
  semester: Semester;
}

export interface ResultDocument extends IResult {
  createdAt: Date;
  updatedAt: Date;
}

export interface ICourseScore {
  course: mongoose.Types.ObjectId;
  score: number;
  points: number;
}
