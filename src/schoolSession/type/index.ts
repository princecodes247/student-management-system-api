import mongoose from "mongoose";

export interface ISchoolSession {
  _id: mongoose.Types.ObjectId;
  code: String;
  title: String;
  description: String;
  unit: Number;
}

export interface SchoolSessionDocument extends ISchoolSession {
  createdAt: Date;
  updatedAt: Date;
}

export enum Semester {
  first = "first",
  second = "second",
}
