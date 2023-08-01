import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../../user/schema";
import { createUser, findUser, getAllUsers, login } from "../service";
import logger from "../../utils/logger";
import { LoginInput } from "../schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function loginHandler(
  req: Request<{}, {}, LoginInput["body"]>,
  res: Response
) {
  try {
    const user = await login(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers(req.query);
    console.log(users);
    return res.json(users);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const users = await findUser(req.params.id);
    console.log(users);
    return res.json(users);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
