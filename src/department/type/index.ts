import mongoose from "mongoose";

export interface IDepartment {
  name: string;
  faculty: mongoose.Schema.Types.ObjectId;
}

export interface DepartmentDocument extends IDepartment {
  createdAt: Date;
  updatedAt: Date;
}
