import { z } from "zod";

export const createSchoolSessionSchema = z.object({
  body: z.object({
    code: z.string({
      required_error: "School Session is required",
    }),
  }),
});

export type CreateSchoolSessionSchema = z.infer<
  typeof createSchoolSessionSchema
>;
