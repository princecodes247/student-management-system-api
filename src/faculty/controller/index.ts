import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createFacultyService as createFaculty,
  findOneFaculty,
  findManyFaculties,
  updateFacultyService as updateFaculty,
  deleteFaculty,
} from "../service";
import { createFacultySchema } from "../schema";
import { IFaculty } from "../type";
import { cancelTrade, settleTrade } from "../../utils/prime-trust/trades";

/**
 * Create Faculty Controller
 * @param req
 * @param res
 * @returns
 */
export const createFacultyHandler = async (
  req: Request<{}, {}, IFaculty>,
  res: Response
) => {
  try {
    return res.json(await createFaculty(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Faculty Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneFacultyHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneFaculty(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Faculty Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyFacultyHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyFaculties(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Faculty Controller
 * @param req
 * @param res
 * @returns
 */
export const updateFacultyHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateFaculty(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Faculty Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteFacultyHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteFaculty(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

