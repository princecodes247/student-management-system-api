import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} from "../controller";
import { createUserSchema } from "../../user/schema";

const router: Router = Router();

router.post("/", validateRequest(createUserSchema), createUserHandler);
router.get("/", getUsersHandler);
router.get("/:id", getUserHandler);

export const AuthRoutes = router;
