import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schema";
import { createUser, findUser, getAllUsers } from "../service";
import logger from "../../utils/logger";

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

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers({});
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
