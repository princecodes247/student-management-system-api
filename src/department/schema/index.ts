import { boolean, number, object, string } from "zod";

export const createDepartmentSchema = object({
  body: object({
    name: string({
      required_error: "Department name is required",
    }),
    faculty: string({
      required_error: "Faculty ID is required",
    }),
  }),
});
