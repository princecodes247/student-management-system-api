import { Router } from "express";
import { upload } from "../../utils/multer";
import validateRequest from "../../middleware/validateRequest";
import {
  createDepartmentHandler,
  deleteDepartmentHandler,
  findManyDepartmentHandler,
  findOneDepartmentHandler,
  updateDepartmentHandler,
} from "../controller";
import { createDepartmentSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyDepartmentHandler);
router.get("/:id", findOneDepartmentHandler);
router.post("/", validateRequest(createDepartmentSchema), createDepartmentHandler);
router.put("/:id", updateDepartmentHandler);
router.delete("/:id", deleteDepartmentHandler);

export const DepartmentRoutes = router;