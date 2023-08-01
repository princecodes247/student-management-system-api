import { z, object, string, TypeOf } from "zod";
import { UserRole, UserType } from "../type/user.type";

export const createUserSchema = object({
  body: object({
    first_name: string({
      required_error: "Name is required",
    }),
    middle_name: string().optional(),
    last_name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Name is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    enrollmentSession: z.number().optional(),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    role: z.nativeEnum(UserRole),
    type: z.nativeEnum(UserType),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
