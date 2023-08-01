import mongoose from "mongoose";

export interface IFaculty {
  faculty_name: string;
}

export interface FacultyDocument extends IFaculty {
  createdAt: Date;
  updatedAt: Date;
}
