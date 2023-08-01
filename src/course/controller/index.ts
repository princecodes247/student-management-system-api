import { Request, Response } from "express";
import {
  createCourseService as createCourse,
  findOneCourse,
  findManyCourses,
  updateCourseService as updateCourse,
  deleteCourse,
} from "../service";
import { StatusCodes } from "http-status-codes";
import { ICourse } from "../type";

/**
 * Create Course Controller
 * @param req
 * @param res
 * @returns
 */
export const createCourseHandler = async (
  req: Request<{}, {}, ICourse>,
  res: Response
) => {
  try {
    return res.json(await createCourse(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Course Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneCourseHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneCourse(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Course Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyCourseHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyCourses(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Course Controller
 * @param req
 * @param res
 * @returns
 */
export const updateCourseHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateCourse(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Course Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteCourseHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteCourse(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
