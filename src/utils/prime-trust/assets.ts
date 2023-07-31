import api from "./config";
import {
  IAssetAttributes,
  IAssetContributionAttributes,
  IAssetDisbursementAttributes,
  IAssetTransferMethodAttributes,
} from "./type";

const assetPrefix = [
  "/v2/internal-asset-transfers",
  "/v2/asset-transfer-methods",
  "/v2/asset-contributions?include=asset-transfer-method,asset-transfer",
  "/v2/asset-disbursements?include=asset-transfer-method,asset-transfer",
  "/v2/assets",
  "/v2/asset-transactions",
];

export const internalAssetTransfers = (attributes: IAssetAttributes) => {
  return api.post(assetPrefix[0], {
    data: {
      type: "internal-asset-transfers",
      attributes,
    },
  });
};

export const createAssetTransferMethod = (
  attributes: IAssetTransferMethodAttributes
) => {
  return api.post("/v2/asset-transfer-methods", {
    data: {
      type: "asset-transfer-methods",
      attributes,
    },
  });
};

export const createAssetContribution = (
  attributes: IAssetContributionAttributes
) => {
  return api.post(assetPrefix[1], {
    data: {
      type: "asset-contributions",
      attributes,
    },
  });
};

export const createAssetDisbursement = (
  attributes: IAssetDisbursementAttributes
) => {
  return api.post(assetPrefix[1], {
    data: {
      type: "asset-disbursements",
      attributes: {
        ...attributes,
        // "asset-transfer": {
        //   "asset-transfer-method-id": attributes["transfer-method-id"],
        // },
      },
    },
  });
};

export const getAssets = () => {
  return api.get(assetPrefix[4]);
};
export const getAsset = (id: string) => {
  return api.get(assetPrefix[4] + id);
};

const assets = {
  createAssetContribution,
  createAssetDisbursement,
  createAssetTransferMethod,
  internalAssetTransfers,
  getAssets,
};

export default assets;
