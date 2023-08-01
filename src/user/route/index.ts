import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import { createUserHandler } from "../controller";
import { createUserSchema } from "../schema";

const router: Router = Router();

router.post("/", validateRequest(createUserSchema), createUserHandler);

export const UserRoutes = router;
