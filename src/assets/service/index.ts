import {
  IAssetContributionAttributes,
  IAssetAttributes,
  IAssetTransferMethodAttributes,
} from "./../../utils/prime-trust/type/index";
import {
  createAssetContribution,
  createAssetDisbursement,
  createAssetTransferMethod,
  getAsset,
  getAssets,
  internalAssetTransfers,
} from "../../utils/prime-trust/assets";
import {
  getTokenAssets,
  getTokenAsset,
} from "../../utils/prime-trust/tokenAssets";

export const transferAsset = async (input: IAssetAttributes) => {
  try {
    const result = await internalAssetTransfers(input);
  } catch (e: any) {
    console.log("sse", e.errors[0].source);
    throw new Error(e);
  }
};

export const createAssetTransferMethodService = async (
  input: IAssetTransferMethodAttributes
) => {
  try {
    const result = await createAssetTransferMethod(input);
    console.log({ result: result.data.data });
    return result.data.data;
  } catch (e: any) {
    console.log("sse", e);
    throw new Error(e);
  }
};

export const createAssetContributionService = async (
  input: IAssetContributionAttributes
) => {
  try {
    const result = await createAssetContribution(input);
  } catch (e: any) {
    console.log("sse", e);
    throw new Error(e);
  }
};

export const withdrawAsset = async () => {
  try {
  } catch (e: any) {
    console.log("sse", e.errors[0].source);
    throw new Error(e);
  }
};

export const getAssetsService = async () => {
  try {
    const assets = await getAssets();
    console.log("assets", assets.data.data);
    return assets.data.data;
  } catch (e: any) {
    console.log("sse", e.errors[0].source);
    throw e;
  }
};

export const getAssetService = async (id: string) => {
  try {
    const assets = await getAsset(id);
    console.log("assets", assets);
    // return assets.data.data;
  } catch (e: any) {
    console.log("sse", e.errors[0].source);
    throw e;
  }
};

export const getTokenAssetsService = async () => {
  const result = await getTokenAssets();
  // console.log({ result });
  return result.data;
};

export const getTokenAssetService = async (tokenAssetID: string) => {
  return await getTokenAsset(tokenAssetID);
};
