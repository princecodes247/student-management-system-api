import { Request, Response } from "express";
import {
  transferAsset,
  withdrawAsset,
  createAssetTransferMethodService,
  createAssetContributionService,
  getAssetsService,
  getTokenAssetsService,
} from "../service";
import { StatusCodes } from "http-status-codes";

/**
 * Create Account Controller
 * @param req
 * @param res
 * @returns
 */
export const transferAssetHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await transferAsset(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const createAssetTransferMethodHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res
      .status(StatusCodes.CREATED)
      .json(await createAssetTransferMethodService(req.body));
  } catch (error: any) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const createAssetContributionHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await createAssetContributionService(req.body));
  } catch (error: any) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const withdrawAssetHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await withdrawAsset());
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getAssetsHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getAssetsService());
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getTokenAssetsHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getTokenAssetsService());
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
