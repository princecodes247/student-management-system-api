import { boolean, number, object, string } from "zod";


export const createProfileSchema = object({
  body: object({
    user_id: string({
      required_error: "User ID is required",
    }),
    olevel_result: string(),
    birth_certificate: string(),
    statutory_declaration: string(),
    jamb_result: string(),
    attestation_letter: string()
  }),
});
