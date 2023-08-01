import { z } from "zod";

export const createCourseSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Course is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    code: z.number({
      required_error: "Score is required",
    }),
  }),
});

export type CreateCourseSchema = z.infer<typeof createCourseSchema>;
