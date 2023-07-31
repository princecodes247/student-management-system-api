import { Router } from "express";
import { upload } from "../../utils/multer";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  documentChecksHandler,
  getAMLChecksHandler,
  getCIPChecksHandler,
  getSingleCIPCheckHandler,
  submitCIPHandler,
  uploadDocumentHandler,
} from "../controller";
import {
  approveCheckSchema,
  documentCheckSchema,
  uploadDocumentSchema,
} from "../schema";

const router: Router = Router();

router.get("/cip-checks", getCIPChecksHandler);
router.post(
  "/cip-checks",
  // validateRequest(),
  submitCIPHandler
);
router.get("/cip-checks/:id", getSingleCIPCheckHandler);
router.post(
  "/cip-checks/:id/approve",
  validateRequest(approveCheckSchema),
  getCIPChecksHandler
);
router.post("/cip-checks/:id/deny", getCIPChecksHandler);

router.get("/aml-checks", getAMLChecksHandler);
router.post("/aml-checks", getAMLChecksHandler);
router.get("/aml-checks/:id", getAMLChecksHandler);
router.post(
  "/aml-checks/:id/approve",
  validateRequest(approveCheckSchema),
  getAMLChecksHandler
);
router.post("/aml-checks/:id/deny", getAMLChecksHandler);
1;
// router.get("/upload-documents", uploadDocumentsHandler);
router.post(
  "/upload-documents",
  upload.single("doc"),
  validateRequest(uploadDocumentSchema),
  uploadDocumentHandler
);
// router.post("/upload-documents/:id", uploadDocumentsHandler);
// router.patch("/upload-documents/:id", uploadDocumentsHandler);
// router.get("/", get);

router.post(
  "/document-checks",
  validateRequest(documentCheckSchema),
  documentChecksHandler
);

export const KYCRoutes = router;
