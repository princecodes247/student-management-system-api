import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import requireUser from "../../middleware/requireUser";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "../controller";
import { createSessionSchema } from "../schema";

const router: Router = Router()

router.post(
    "/",
    validateRequest(createSessionSchema),
    createUserSessionHandler
);

router.get("/", requireUser, getUserSessionsHandler);

router.delete("/", requireUser, deleteSessionHandler);

export const SessionRoutes = router;