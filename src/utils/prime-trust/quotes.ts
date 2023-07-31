import api from "./config";
import { IQuotesData } from "./type";

const servicePrefix = "/v2/quotes";

export const getQuotes = () => {
  return api.get(servicePrefix);
};

export const getQuote = (quoteId: string) => {
  return api.get(servicePrefix + "/" + quoteId);
};

export const requestQuote = (attributes: IQuotesData) => {
  return api.post(servicePrefix + `?account.id=${attributes["account-id"]}`, {
    data: {
      type: "quotes",
      attributes: {
        ...attributes,
      },
    },
  });
};

export const cancelQuote = () => {
  return api.post(servicePrefix + "/cancel", {
    data: {
      type: "quotes",
      attributes: {},
    },
  });
};
export const executeQuote = async (id: string) => {
  const result = await api.post(servicePrefix + "/" + id + "/execute", {
    data: {
      type: "quotes",
      attributes: {
        "quote-id": id,
      },
    },
  });

  console.log(result);
  return result;
};

export const quoteSandbox = (quoteId: string) => {
  return api.post(servicePrefix + quoteId + "/sandbox", {
    data: {
      type: "quotes",
      attributes: {},
    },
  });
};
