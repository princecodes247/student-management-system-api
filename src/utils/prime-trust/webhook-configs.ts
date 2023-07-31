import api from "./config";

const servicePrefix = "/v2/webhook-configs";

export const getWebhookConfigs = (includeFailed: boolean = false) => {
  return api.get(servicePrefix + `?filter[success eq]=${includeFailed}`);
};

export const getWebhookConfigsByAccount = (accountID: string) => {
  return api.get(servicePrefix + `?account.id=${accountID}`);
};

export const getWebhookConfigsByResource = (resource: string) => {
  return api.get(servicePrefix + `?filter[resource-type]=${resource}`);
};

export const createWebhookConfig = (accountID: string, url: string) => {
  return api.post(servicePrefix, {
    data: {
      type: "webhook-configs",
      attributes: {
        url,
        "account-id": accountID,
      },
    },
  });
};

export const updateWebhookConfig = (webhookConfigID: string) => {
  return api.patch(servicePrefix + "/" + webhookConfigID, {});
};
