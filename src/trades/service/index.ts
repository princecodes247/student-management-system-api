import { omit } from "lodash";
import {
  requestTrade,
  getTrade,
  getTrades,
  cancelTrade,
  settleTrade,
} from "../../utils/prime-trust/trades";
import { TradeModel } from "../model";
import { ITrade } from "../type";
import { ITradeData } from "../../utils/prime-trust/type";

export const getTradesService = async () => {
  const result = await getTrades();
  // console.log({ result });
  return result.data;
};

export const getTradeService = async (quotesID: string) => {
  return await getTrade(quotesID);
};

export const settleTradeService = async (quotesID: string) => {
  return await settleTrade(quotesID);
};

export const cancelTradeService = async (quotesID: string) => {
  return await cancelTrade(quotesID);
};

export const requestTradeService = async (input: any) => {
  // return await AccountModel.create(input)
  try {
    const { data } = await requestTrade(input);
    console.log("nackkk");
    if (data) {
      console.log({ data });
      console.log({ attr: data.data.attributes });
      const trade = await TradeModel.create({
        ...data.data,
        // trade_id: data.data.id,
      });
      return { trade };
    } else {
      console.log("Trade not created");
      throw new Error("Trade not created");
      // return false;
    }
  } catch (e: any) {
    console.log("sse", e);
    throw new Error(e);
  }
};
