import { ICourseScore, Semester } from "./../type/index";
import { z } from "zod";

const country = z
  .string({
    required_error: "Tax Country is required",
  })
  .min(2, "Tax Country must be at least 2 characters")
  .max(3, "Tax Country must be at most 3 characters");

export const createResultSchema = z.object({
  body: z.object({
    courses: z.array(
      z.object({
        course: z.string({
          required_error: "Course is required",
        }),
        score: z.number({
          required_error: "Score is required",
        }),
      })
    ),
    user: z.string({
      required_error: "User is required",
    }),
    session: z.string({
      required_error: "Session is required",
    }),
    semester: z.nativeEnum(Semester, {
      required_error: "Semester is required",
    }),
  }),
});

export type CreateResultSchema = z.infer<typeof createResultSchema>;
