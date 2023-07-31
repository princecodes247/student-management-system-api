import { Router } from "express";
import validateRequest from "../../../../src/middleware/validateRequest";
import {
  createUserHandler,
  deleteUserHandler,
  findManyUserHandler,
  findOneUserHandler,
  updateUserHandler,
} from "../controller";
import { createUserSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyUserHandler);
router.get("/:id", findOneUserHandler);
router.post("/", validateRequest(createUserSchema), createUserHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

export const UserRoutes = router;
