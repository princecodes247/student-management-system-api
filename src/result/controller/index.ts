import { Request, Response } from "express";
import {
  createResultService as createResult,
  findOneResult,
  findManyResults,
  updateResultService as updateResult,
  deleteResult,
} from "../service";
import { StatusCodes } from "http-status-codes";
import { CreateResultSchema } from "../schema";
import { IResult } from "../type";

/**
 * Create Result Controller
 * @param req
 * @param res
 * @returns
 */
export const createResultHandler = async (
  req: Request<{}, {}, IResult>,
  res: Response
) => {
  try {
    return res.json(await createResult(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Result Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneResultHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneResult(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Result Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyResultHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyResults(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Result Controller
 * @param req
 * @param res
 * @returns
 */
export const updateResultHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateResult(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Result Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteResultHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteResult(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
