import api from "./config";
import { ITradeData } from "./type";

const servicePrefix = "/v2/trades";

export const getTrades = () => {
  return api.get(servicePrefix);
};

export const getTrade = (tradeId: string) => {
  return api.get(servicePrefix + tradeId);
};

export const requestTrade = ({
  initiator,
  acceptor,
}: {
  initiator: ITradeData;
  acceptor: ITradeData;
}) => {
  return api.post(servicePrefix, {
    data: {
      type: "trades",
      attributes: {
        initiator,
        acceptor,
        "expires-at": "2024-03-18T14:27:59Z",
      },
    },
  });
};

export const cancelTrade = (tradeId: string) => {
  return api.post(servicePrefix + tradeId + "/cancel", {});
};
export const settleTrade = (tradeId: string) => {
  return api.post(servicePrefix + tradeId + "/settle", {});
};
