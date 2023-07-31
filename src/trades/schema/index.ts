import { boolean, number, object, string } from "zod";

const TradeMemberSchema = object({
  "account-id": string(),
  amount: string(),
  "asset-id": string(),
  "market-value-amount": string().optional(),
});

export const createTradeSchema = object({
  body: object({
    initiator: TradeMemberSchema,
    acceptor: TradeMemberSchema,
  }),
});
