import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
  loginHandler,
} from "../controller";
import { createUserSchema } from "../../user/schema";
import { loginSchema } from "../schema";

const router: Router = Router();

router.post("/", validateRequest(createUserSchema), createUserHandler);
router.post("/login", validateRequest(loginSchema), loginHandler);
router.get("/", getUsersHandler);
router.get("/:id", getUserHandler);

export const AuthRoutes = router;
