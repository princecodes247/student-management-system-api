import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  getTradeService,
  getTradesService,
  requestTradeService,
} from "../service";
import { cancelTrade, settleTrade } from "../../utils/prime-trust/trades";

export const getTradesHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getTradesService());
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const requestTradeHandler = async (req: Request, res: Response) => {
  try {
    console.log({ body: req.body });
    return res.json(await requestTradeService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getTradeHandler = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    return res.json(await getTradeService(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const settleTradeHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await settleTrade(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const cancelTradeHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await cancelTrade(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
