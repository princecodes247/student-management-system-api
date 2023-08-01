import { boolean, number, object, string } from "zod";

export const createDepartmentSchema = object({
  body: object({
    department_name: string(),
    faculty_id: string(),
  }),
});
