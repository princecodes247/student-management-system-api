import { z, object, string, TypeOf } from "zod";

export const loginSchema = object({
  body: object({
    matriculationNumber: string({
      required_error: "Matriculation Number is required",
    }),
    password: string({
      required_error: "Name is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
  }),
});

export type LoginInput = TypeOf<typeof loginSchema>;
