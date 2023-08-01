import mongoose from "mongoose";

export interface IDepartment {
  department_name: string;
  faculty_id: mongoose.Schema.Types.ObjectId;
}

export interface DepartmentDocument extends IDepartment {
  createdAt: Date;
  updatedAt: Date;
}
