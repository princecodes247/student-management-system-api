import { Router } from "express";
import validateRequest from "../../../src/middleware/validateRequest";
import {
  createResultHandler,
  deleteResultHandler,
  findManyResultHandler,
  findOneResultHandler,
  updateResultHandler,
} from "../controller";
import { createResultSchema } from "../schema";

const router: Router = Router();

router.get("/", findManyResultHandler);
router.get("/:id", findOneResultHandler);
router.post("/", validateRequest(createResultSchema), createResultHandler);
router.put("/:id", updateResultHandler);
router.delete("/:id", deleteResultHandler);

export const ResultRoutes = router;
