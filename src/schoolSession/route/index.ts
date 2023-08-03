import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  createSchoolSessionHandler,
  deleteSchoolSessionHandler,
  findManySchoolSessionHandler,
  findOneSchoolSessionHandler,
  updateSchoolSessionHandler,
} from "../controller";
import { createSchoolSessionSchema } from "../schema";

const router: Router = Router();

router.get("/", findManySchoolSessionHandler);
router.get("/:id", findOneSchoolSessionHandler);
router.post(
  "/",
  validateRequest(createSchoolSessionSchema),
  createSchoolSessionHandler
);
router.put("/:id", updateSchoolSessionHandler);
router.delete("/:id", deleteSchoolSessionHandler);

export const SchoolSessionRoutes = router;
