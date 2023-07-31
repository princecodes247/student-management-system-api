import { object, string } from "zod";

export const transferSchema = object({
  body: object({
    "unit-count": string({
      required_error: "Unit is required",
    }),
    "asset-id": string({
      required_error: "Asset ID is required",
    }),
    "from-account-id": string({
      required_error: "From account id is required",
    }),
    "to-account-id": string({
      required_error: "To account id is required",
    }),
    reference: string({
      required_error: "Reference is required",
    }).min(2, "reference must be at least 2 characters"),
  }),
});

export const withdrawSchema = object({
  body: object({
    "unit-count": string({
      required_error: "Unit is required",
    }),
    "asset-id": string({
      required_error: "Asset ID is required",
    }),
    "contact-id": string({
      required_error: "Contact id is required",
    }),
    "account-id": string({
      required_error: "Account id is required",
    }),
    //   "asset-transfer": {
    //     "asset-transfer-method-id": "{{asset-transfer-method-outgoing-id}}"
    // },
  }),
});

export const createTransferMethodSchema = object({
  body: object({
    label: string({
      required_error: "Label is required",
    }),
    "cost-basis": string({
      required_error: "Asset ID is required",
    }),
  }),
});

export const createAssetContributionSchema = object({
  body: object({
    label: string({
      required_error: "Label is required",
    }),
    "cost-basis": string({
      required_error: "Asset ID is required",
    }),
  }),
});
