import api from "./config";

const servicePrefix = "/v2/token-assets";

export const getTokenAssets = () => {
  return api.get(servicePrefix);
};

export const getTokenAsset = (tokenId: string) => {
  return api.get(servicePrefix + tokenId);
};

export const createTokenAsset = () => {
  return api.post(servicePrefix, {});
};

export const cancelTokenAsset = () => {
  return api.post(servicePrefix, {});
};
export const settleTokenAsset = () => {
  return api.post(servicePrefix, {});
};
