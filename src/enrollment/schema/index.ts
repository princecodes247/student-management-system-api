import { z } from "zod";
import { Semester } from "../../schoolSession/type";

export const createEnrollmentSchema = z.object({
  body: z.object({
    courses: z.array(
      z.string({
        required_error: "Course is required",
      })
    ),
    student: z.string({
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

export type CreateEnrollmentSchema = z.infer<typeof createEnrollmentSchema>;
