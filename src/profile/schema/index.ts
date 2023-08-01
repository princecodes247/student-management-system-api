import { boolean, number, object, string } from "zod";

const fileSchema = object({
  name: string(),
  type: string(),
  size: number(),
  content: string(),
});

const countrySchema = string({
  required_error: "Tax Country is required",
})
  .min(2, "Tax Country must be at least 2 characters")
  .max(3, "Tax Country must be at most 3 characters");

export const uploadDocumentSchema = object({
  // file: object({
  //   // value: fileSchema.nullable(),
  //   originalname: string().nullable(),
  //   fieldname: string().nullable(),
  //   encoding: string().nullable(),
  //   mimetype: string().nullable(),
  //   size: number().nullable(),
  //   buffer: object({}),
  // }),
  body: object({
    label: string(),
    contactId: string(),
  }),
});

export const approveCheckSchema = object({
  params: object({
    id: string(),
  }),
});

export const documentCheckSchema = object({
  body: object({
    "contact-id": string(),
    "uploaded-document-id": string(),
    "backside-document-id": string(),
    // "expires-on": "2029-12-30",
    "expires-on": string(),
    identity: boolean(),
    "identity-photo": boolean(),
    "proof-of-address": boolean(),
    "kyc-document-country": countrySchema,
    // "kyc-document-type": "drivers_license",
    "kyc-document-type": string(),
  }),
});
