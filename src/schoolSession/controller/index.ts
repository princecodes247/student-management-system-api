import { Request, Response } from "express";
import {
  createSchoolSessionService as createSchoolSession,
  findOneSchoolSession,
  findManySchoolSessions,
  updateSchoolSessionService as updateSchoolSession,
  deleteSchoolSession,
} from "../service";
import { StatusCodes } from "http-status-codes";
import { ISchoolSession } from "../type";

/**
 * Create a School Session Controller
 * @param req
 * @param res
 * @returns
 */
export const createSchoolSessionHandler = async (
  req: Request<{}, {}, ISchoolSession>,
  res: Response
) => {
  try {
    return res.json(await createSchoolSession(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single SchoolSession Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneSchoolSessionHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await findOneSchoolSession(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many SchoolSession Controller
 * @param req
 * @param res
 * @returns
 */
export const findManySchoolSessionHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await findManySchoolSessions(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update SchoolSession Controller
 * @param req
 * @param res
 * @returns
 */
export const updateSchoolSessionHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(
      await updateSchoolSession(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete SchoolSession Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteSchoolSessionHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(
      await deleteSchoolSession(req.query ?? { _id: req.params._id })
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
