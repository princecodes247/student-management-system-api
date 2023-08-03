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

export const updateProfileSchema = object({
  body: object({
    phone: string({
      required_error: "Phone Number is required",
    }),
    mothersName: string().optional(),
    nationality: string({
      required_error: "Nationality is required",
    }),
    stateOfOrigin: string({
      required_error: "State of Origin is required",
    }),
    lga: string({
      required_error: "LGA is required",
    }),
    address: string({
      required_error: "Address is required",
    }),
  }),
});
