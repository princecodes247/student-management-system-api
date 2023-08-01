import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createDepartmentService as createDepartment,
  findOneDepartment,
  findManyDepartments,
  updateDepartmentService as updateDepartment,
  deleteDepartment,
} from "../service";
import { createDepartmentSchema } from "../schema";
import { IDepartment } from "../type";
import { cancelTrade, settleTrade } from "../../utils/prime-trust/trades";

/**
 * Create Department Controller
 * @param req
 * @param res
 * @returns
 */
export const createDepartmentHandler = async (
  req: Request<{}, {}, IDepartment>,
  res: Response
) => {
  try {
    return res.json(await createDepartment(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Department Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneDepartmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneDepartment(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Department Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyDepartmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyDepartments(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Department Controller
 * @param req
 * @param res
 * @returns
 */
export const updateDepartmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateDepartment(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Department Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteDepartmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteDepartment(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

