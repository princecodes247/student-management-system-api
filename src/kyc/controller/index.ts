import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  approveAMLCheckService,
  approveCIPCheckService,
  documentChecksService,
  getAMLChecksService,
  getCIPChecksService,
  submitCIPService,
  uploadDocumentService,
} from "./../service";

export const getCIPChecksHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getCIPChecksService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getSingleCIPCheckHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getCIPChecksService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getAMLChecksHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await getAMLChecksService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const submitCIPHandler: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await submitCIPService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const approveCIPCheckHandler: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await approveCIPCheckService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const approveAMLCheckHandler: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await approveAMLCheckService(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const uploadDocumentHandler = async (req: Request, res: Response) => {
  try {
    const response = await uploadDocumentService(
      req.body.label,
      req.file,
      req.body.contactId
    );
    return res.json(response.data);
  } catch (error: any) {
    console.log(error);
    console.log("keys", Object.keys(error));
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const documentChecksHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await documentChecksService(req.body.label));
  } catch (error: any) {
    console.log(error.data);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
