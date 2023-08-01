import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  createCourseHandler,
  deleteCourseHandler,
  findManyCourseHandler,
  findOneCourseHandler,
  updateCourseHandler,
} from "../controller";
import { createCourseSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyCourseHandler);
router.get("/:id", findOneCourseHandler);
router.post("/", validateRequest(createCourseSchema), createCourseHandler);
router.put("/:id", updateCourseHandler);
router.delete("/:id", deleteCourseHandler);

export const CourseRoutes = router;
