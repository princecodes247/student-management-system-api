import { Request, Response } from "express";
import {
  createAccountService as createAccount,
  findOneAccount,
  findManyAccount,
  updateAccountService as updateAccount,
  deleteAccount,
  openAccountService as openAccount,
  getAccountAssetsBalance,
} from "../service";
import { StatusCodes } from "http-status-codes";

/**
 * Create Account Controller
 * @param req
 * @param res
 * @returns
 */
export const createAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await createAccount(req.body));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Single Account Controller
 * @param req
 * @param res
 * @returns
 */
export const findOneAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findOneAccount(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const getAccountAssetsBalanceHandler = async (
  req: Request,
  res: Response
) => {
  try {
    return res.json(await getAccountAssetsBalance(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

export const openAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await openAccount(req.params.id));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Find Many Account Controller
 * @param req
 * @param res
 * @returns
 */
export const findManyAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await findManyAccount(req.query ?? {}));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Update Account Controller
 * @param req
 * @param res
 * @returns
 */
export const updateAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(
      await updateAccount(req.query ?? { _id: req.params._id }, req.body)
    );
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};

/**
 * Delete Account Controller
 * @param req
 * @param res
 * @returns
 */
export const deleteAccountHandler = async (req: Request, res: Response) => {
  try {
    return res.json(await deleteAccount(req.query ?? { _id: req.params._id }));
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message });
  }
};
