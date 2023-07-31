import {
  AccountType,
  ContactType,
  IAgreementPreviewAttributes,
  SexType,
} from "./type";
import api from "./config";
import { IAccountAttributes } from "./type/index";

const servicePrefix = "/v2/accounts";
const accountCashTotalsPrefix = "/v2/account-cash-totals";
const accountAssetTotalsPrefix = "/v2/account-asset-totals";
const cashTransactionsPrefix = "/v2/cash-transactions";
const assetTransactionsPrefix = "/v2/asset-transactions";

export const createAccount = async (attributes: IAccountAttributes) => {
  await api.post(servicePrefix, {
    data: {
      type: "accounts",
      attributes,
    },
  });
  return api.post(
    servicePrefix + "?include=latest-agreement,account-type,webhook-config",
    {
      data: {
        type: "accounts",
        attributes,
      },
    }
  );
};

export const updateAccount = (userID: string, name: string) => {
  return api.patch(servicePrefix + "/" + userID, {
    data: {
      type: "user",
      attributes: {
        "user-id": userID,
        name,
      },
    },
  });
};

export const getAccount = (accountID: string) => {
  return api.get(servicePrefix + "/" + accountID);
};

export const getAccounts = () => {
  return api.get(servicePrefix + "?include=contacts");
};

export const getAccountStatement = (
  accountID: string,
  { month, year, format }: { month: string; year: string; format: string }
) => {
  return api.get(
    servicePrefix +
      "/" +
      accountID +
      `/account-statements?filter[month]=${month}&filter[year]=${year}&filter[format]=${format}`
  );
};

export const getStatements = (accountID: string) => {
  return api.get(servicePrefix + "/" + accountID + "/statements");
};

export const getCashTransfers = (accountID: string) => {
  return api.get(servicePrefix + "/" + accountID + "/account-cash-transfers");
};

export const getAuthorizeTransferAccounts = (accountID: string) => {
  return api.get(
    servicePrefix + "/" + accountID + "/authorized-transfer-accounts"
  );
};

export const getInternalAssetTransfer = (accountID: string) => {
  return api.get(servicePrefix + "/" + accountID + "/internal-asset-transfer");
};

export const getPolicy = (accountID: string) => {
  return api.get(servicePrefix + "/" + accountID + "/policy");
};

export const updateAccountSandbox = (
  accountID: string,
  attributes: {
    allowed_currencies: Array<string>;
    "default-currency": string;
  }
) => {
  return api.patch(servicePrefix + "/" + accountID + "/sandbox", {
    data: {
      type: "account-policies",
      attributes,
    },
  });
};

export const freezeAccountSandbox = (accountID: string) => {
  return api.post(servicePrefix + "/" + accountID + "/sandbox/freeze");
};

export const fundAccountSandbox = (accountID: string, amount: number) => {
  return api.post(servicePrefix + "/" + accountID + "/sandbox/fund", {
    data: {
      type: "accounts",
      attributes: {
        amount,
      },
    },
  });
};

export const openAccount = (accountID: string, sandboxMode: boolean = true) => {
  return api.post(
    `${servicePrefix}/${accountID}${sandboxMode && "/sandbox"}/open`
  );
};

export const unfreezeAccount = (
  accountID: string,
  sandboxMode: boolean = true
) => {
  return api.post(
    `${servicePrefix}/${accountID}${sandboxMode && "/sandbox"}/unfreeze`
  );
};

export const getAccountCashTotals = (accountId: string) => {
  return api.get(accountCashTotalsPrefix + `?account.id=${accountId}`);
};

export const getAccountAssetTotals = (accountId: string) => {
  return api.get(accountAssetTotalsPrefix + `?account.id=${accountId}`);
};

export const getCashTransactions = (accountId: string) => {
  return api.get(cashTransactionsPrefix + `?account.id=${accountId}`);
};

export const getAssetTransactions = (accountId: string) => {
  return api.get(assetTransactionsPrefix + `?account.id=${accountId}`);
};

const accounts = {
  getAccounts,
  createAccount,
  updateAccount,
  getAccount,
  getCashTransfers,
  getAuthorizeTransferAccounts,
  getInternalAssetTransfer,
  getPolicy,
  updateAccountSandbox,
  freezeAccountSandbox,
  fundAccountSandbox,
  openAccount,
  unfreezeAccount,
};

export default accounts;
