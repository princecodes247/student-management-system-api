import { z } from "zod";
import {
  AccountType,
  ContactType,
  SexType,
} from "../../utils/prime-trust/type";

const country = z
  .string({
    required_error: "Tax Country is required",
  })
  .min(2, "Tax Country must be at least 2 characters")
  .max(3, "Tax Country must be at most 3 characters");

export const createAccountSchema = z.object({
  body: z.object({
    "account-type": z.nativeEnum(AccountType),
    name: z.string({
      required_error: "Name is required",
    }),
    "authorized-signature": z.string({
      required_error: "Authorized Signature is required",
    }),
    owner: z.object({
      "contact-type": z.nativeEnum(ContactType),
      name: z.string({
        required_error: "Name is required",
      }),
      email: z
        .string({
          required_error: "Email is required",
        })
        .email("Not a valid email"),
      "date-of-birth": z.string({
        required_error: "Date of Birth is required",
      }),
      geolocation: z.string({
        required_error: "Geolocation is required",
      }),
      "ip-address": z.string({
        required_error: "IP Address is required",
      }),
      sex: z.nativeEnum(SexType),
      "tax-id-number": z.string({
        required_error: "Tax ID Number is required",
      }),
      "tax-country": country,
      "primary-phone-number": z.object({
        country: country,
        number: z.string({
          required_error: "Phone Number is required",
        }),
        sms: z.boolean(),
      }),
      "primary-address": z.object({
        "street-1": z.string({
          required_error: "Street 1 is required",
        }),
        "street-2": z.string({
          required_error: "Street 2 is required",
        }),
        "postal-code": z.string({
          required_error: "Postal Code is required",
        }),
        city: z.string({
          required_error: "City is required",
        }),
        region: z.string({
          required_error: "Region is required",
        }),
        country: country,
      }),
    }),
  }),
});

// {
//   "account-type": AccountType.custodial,
//   name: "John Doe's Account",
//   "authorized-signature": "John James Doe",
//   owner: {
//     "contact-type": ContactType.naturalPerson,
//     name: "John James Doe",
//     email: "johndoe@email.in",
//     "date-of-birth": "1980-06-09",
//     geolocation: "+40.756054-73.986951/",
//     "ip-address": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
//     sex: SexType.male,
//     "tax-id-number": "123123123",
//     "tax-country": "US",
//     "primary-phone-number": {
//       country: "US",
//       number: "1231231231",
//       sms: true,
//     },
//     "primary-address": {
//       "street-1": "123 MK Road",
//       "street-2": "Flat 3",
//       "postal-code": "89145",
//       city: "Las Vegas",
//       region: "NV",
//       country: "US",
//     },
//   },
// }
