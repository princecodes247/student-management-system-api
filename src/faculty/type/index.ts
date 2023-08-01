import mongoose from "mongoose";

export interface IFaculty {
  name: string;
}

export interface FacultyDocument extends IFaculty {
  createdAt: Date;
  updatedAt: Date;
}
