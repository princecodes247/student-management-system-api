import mongoose from "mongoose";
import { ICourse } from "../../course/type";
import { Semester } from "../../schoolSession/type";

export interface IEnrollment {
  student: mongoose.Types.ObjectId;
  session: mongoose.Types.ObjectId;
  semester: Semester;
  courses: ICourse[];
}

export interface IEnrollmentInput {
  student: string;
  session: string;
  semester: Semester;
  courses: string[];
}

export interface EnrollmentDocument extends IEnrollment {
  createdAt: Date;
  updatedAt: Date;
}
