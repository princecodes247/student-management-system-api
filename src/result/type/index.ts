import mongoose from "mongoose";

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

export enum Semester {
  first = "first",
  second = "second",
}
