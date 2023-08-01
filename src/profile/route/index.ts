import { Router } from "express";
import { upload } from "../../utils/multer";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  uploadDocumentHandler,
  deleteProfileHandler,
  findManyProfileHandler,
  findOneProfileHandler,
  updateProfileHandler,
} from "../controller";
import { createProfileSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyProfileHandler);
router.get("/:id", findOneProfileHandler);
router.post("/", validateRequest(createProfileSchema), uploadDocumentHandler);
router.put("/:id", updateProfileHandler);
router.delete("/:id", deleteProfileHandler);

export const ProfileRoutes = router;