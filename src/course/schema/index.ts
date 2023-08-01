import { z } from "zod";

export const createCourseSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Course is required",
    }),
    description: z.string().optional(),
    code: z.number({
      required_error: "Score is required",
    }),
    unit: z.number({
      required_error: "Unit is required",
    }),
    department: z.string({
      required_error: "Department is required",
    }),
  }),
});

export type CreateCourseSchema = z.infer<typeof createCourseSchema>;
