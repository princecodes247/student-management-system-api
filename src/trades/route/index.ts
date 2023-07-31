import { Router } from "express";
import { upload } from "../../utils/multer";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  getTradeHandler,
  getTradesHandler,
  requestTradeHandler,
} from "../controller";
import { createTradeSchema } from "../schema";

const router: Router = Router();

router.get("/", getTradesHandler);
router.get("/:id", getTradeHandler);
router.post("/", [validateRequest(createTradeSchema)], requestTradeHandler);
router.post("/:tradeId/settle", requestTradeHandler);
router.post("/:tradeId/cancel", requestTradeHandler);

export const TradesRoutes = router;
