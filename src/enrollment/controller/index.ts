import { Request, Response } from "express";
import {
  createEnrollmentService as createEnrollment,
  findOneEnrollment,
  findManyEnrollments,
  updateEnrollmentService as updateEnrollment,
  deleteEnrollment,
} from "../service";
import { StatusCodes } from "http-status-codes";
import { CreateEnrollmentSchema } from "../schema";
import { IEnrollment } from "../type";

/**
 * Create Enrollment Controller
 * @param req
 * @param res
 * @returns
 */
export const createEnrollmentHandler = async (
  req: Request<{}, {}, IEnrollment>,
  res: Response
) => {
  try {
    return res.json(await createEnrollment(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Enrollment Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneEnrollmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneEnrollment(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Enrollment Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyEnrollmentHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await findManyEnrollments(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Enrollment Controller
 * @param req
 * @param res
 * @returns
 */
export const updateEnrollmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateEnrollment(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Enrollment Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteEnrollmentHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await deleteEnrollment(req.query ?? { _id: req.params._id })
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
