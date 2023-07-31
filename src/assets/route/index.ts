import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";

import {
  createAssetContributionSchema,
  createTransferMethodSchema,
  transferSchema,
  withdrawSchema,
} from "../schema";
import {
  createAssetContributionHandler,
  createAssetTransferMethodHandler,
  getAssetsHandler,
  getTokenAssetsHandler,
  transferAssetHandler,
  withdrawAssetHandler,
} from "./../controller";

const router: Router = Router();

router.get("/", getAssetsHandler);
router.post(
  "/transfer-method",
  // validateRequest(createTransferMethodSchema),
  createAssetTransferMethodHandler
);
router.post(
  "/asset-contribution",
  validateRequest(createAssetContributionSchema),
  createAssetContributionHandler
);
router.post("/transfer", validateRequest(transferSchema), transferAssetHandler);
router.post("/withdraw", validateRequest(withdrawSchema), withdrawAssetHandler);
router.get("/tokens", getTokenAssetsHandler);

export const AssetsRoutes = router;
