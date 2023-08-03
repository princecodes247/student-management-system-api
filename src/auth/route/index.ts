import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
  loginHandler,
} from "../controller";
import { createUserSchema } from "../../user/schema";
import { loginSchema, updateProfileSchema } from "../schema";
import { updateProfileHandler } from "../../profile/controller";

const router: Router = Router();

router.post("/", validateRequest(createUserSchema), createUserHandler);
router.post("/login", validateRequest(loginSchema), loginHandler);
router.post(
  "/update-profile",
  validateRequest(updateProfileSchema),
  updateProfileHandler
);
router.get("/", getUsersHandler);
router.get("/:id", getUserHandler);

export const AuthRoutes = router;
