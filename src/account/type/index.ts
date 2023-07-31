import mongoose from "mongoose";

export interface IAccount {
  account_id: string;
  attributes: Object;
  relationships: Object;
  links: Object;
}

export interface AccountDocument extends IAccount {
  createdAt: Date;
  updatedAt: Date;
}
