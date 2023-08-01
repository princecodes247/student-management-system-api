import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  createEnrollmentHandler,
  deleteEnrollmentHandler,
  findManyEnrollmentHandler,
  findOneEnrollmentHandler,
  updateEnrollmentHandler,
} from "../controller";
import { createEnrollmentSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyEnrollmentHandler);
router.get("/:id", findOneEnrollmentHandler);
router.post(
  "/",
  validateRequest(createEnrollmentSchema),
  createEnrollmentHandler
);
router.put("/:id", updateEnrollmentHandler);
router.delete("/:id", deleteEnrollmentHandler);

export const EnrollmentRoutes = router;
