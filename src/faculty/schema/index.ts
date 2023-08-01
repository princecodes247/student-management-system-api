import { boolean, number, object, string } from "zod";

export const createFacultySchema = object({
  body: object({
    name: string(),
  }),
});
