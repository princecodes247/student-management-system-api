import mongoose from "mongoose";

export interface IKYC {
  account_id: string;
  attributes: Object;
  relationships: Object;
  links: Object;
}

export interface KYCDocument extends IKYC {
  createdAt: Date;
  updatedAt: Date;
}
