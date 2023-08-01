import { Schema } from "mongoose";
import mongoose from "mongoose";
import { ProfileDocument, ProfileDocumentStatus } from "../type";

const ProfileSchema = new Schema<ProfileDocument>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    olevel_result: {
      name: { type: String, required: true },
      status: {
        type: String,
        enum: Object.values(ProfileDocumentStatus),
        default: ProfileDocumentStatus.PENDING,
      },
    },
    birth_certificate: {
      name: { type: String, required: true },
      status: {
        type: String,
        enum: Object.values(ProfileDocumentStatus),
        default: ProfileDocumentStatus.PENDING,
      },
    },
    statutory_declaration: {
      name: { type: String, required: true },
      status: {
        type: String,
        enum: Object.values(ProfileDocumentStatus),
        default: ProfileDocumentStatus.PENDING,
      },
    },
    jamb_result: {
      name: { type: String, required: true },
      status: {
        type: String,
        enum: Object.values(ProfileDocumentStatus),
        default: ProfileDocumentStatus.PENDING,
      },
    },
    attestation_letter: {
      name: { type: String, required: true },
      status: {
        type: String,
        enum: Object.values(ProfileDocumentStatus),
        default: ProfileDocumentStatus.PENDING,
      },
    },
  },
  { timestamps: true }
);

export const ProfileModel = mongoose.model<ProfileDocument>("Profile", ProfileSchema);
