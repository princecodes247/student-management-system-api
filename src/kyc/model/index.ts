import { Schema } from "mongoose";
import mongoose from "mongoose";
import { KYCDocument } from "../type";

const KYCSchema = new Schema(
  {
    account_id: { type: String, required: true, unique: true },
    attributes: {
      name: { type: String, required: true },
      //   email: { type: String, required: true },
      number: { type: String, required: true },
      "contributions-frozen": { type: Boolean, default: true },
      "disbursements-frozen": { type: Boolean, default: true },
      "organization-label": { type: String, required: true },
      statements: { type: Boolean, default: true },
      status: { type: String, enum: ["pending", "opened", "closed"] },
      "solid-freeze": { type: Boolean, default: true },
      "offline-cold-storage": { type: String, required: false },
      "freeze-required-actions": { type: Array, default: [] },
      "freeze-not-required-actions": { type: Array, default: [] },
      "uploaded-document-ids": { type: Array, default: [] },
    },
    relationships: {
      type: Object,
      default: {},
    },
    links: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export const KYCModel = mongoose.model<KYCDocument>("KYC", KYCSchema);
