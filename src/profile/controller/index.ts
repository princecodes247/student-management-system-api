import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  uploadDocumentService as uploadDocument,
  findOneProfile,
  findManyProfiles,
  updateProfileService as updateProfile,
  deleteProfile,
} from "../service";
import { createProfileSchema } from "../schema";
import { IProfile, IProfileInput } from "../type";

/**
 * Create Profile Controller
 * @param req
 * @param res
 * @returns
 */
export const uploadDocumentHandler = async (
  req: Request<{}, {}, IProfileInput>,
  res: Response
) => {
  try {
    console.log(req.body);
    return res.json(await uploadDocument(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Profile Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneProfileHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneProfile(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Profile Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyProfileHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyProfiles(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Profile Controller
 * @param req
 * @param res
 * @returns
 */
export const updateProfileHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateProfile(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Profile Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteProfileHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteProfile(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
