import { Router } from "express";
import { upload } from "../../utils/multer";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  createFacultyHandler,
  deleteFacultyHandler,
  findManyFacultyHandler,
  findOneFacultyHandler,
  updateFacultyHandler,
} from "../controller";
import { createFacultySchema } from "../schema";

const router: Router = Router();

router.get("/", findManyFacultyHandler);
router.get("/:id", findOneFacultyHandler);
router.post("/", validateRequest(createFacultySchema), createFacultyHandler);
router.put("/:id", updateFacultyHandler);
router.delete("/:id", deleteFacultyHandler);

export const FacultyRoutes = router;
