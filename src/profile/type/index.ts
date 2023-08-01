import mongoose from "mongoose";


export enum ProfileDocumentStatus {
  REJECTED = "rejected",
  PENDING = "pending",
  ACCEPTED = "accepted",
  NOT_STARTED = "not_started",
}
export interface IProfileDocument {
  name: string;
  status: ProfileDocumentStatus;
}

export interface IProfile {
  user_id: mongoose.Schema.Types.ObjectId;
  olevel_result: IProfileDocument ;
  birth_certificate: IProfileDocument;
  statutory_declaration: IProfileDocument;
  jamb_result: IProfileDocument;
  attestation_letter: IProfileDocument;
}

export interface IProfileInput {
  user_id: mongoose.Schema.Types.ObjectId;
  olevel_result: string ;
  birth_certificate: string;
  statutory_declaration: string;
  jamb_result: string;
  attestation_letter: string;
}

export interface ProfileDocument extends IProfile {
  createdAt: Date;
  updatedAt: Date;
}
