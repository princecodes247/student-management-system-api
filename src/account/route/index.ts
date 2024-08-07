import { Router } from "express";
import {
  createAccountHandler,
  deleteAccountHandler,
  findManyAccountHandler,
  findOneAccountHandler,
  getAccountAssetsBalanceHandler,
  openAccountHandler,
  updateAccountHandler,
} from "../controller";

const router: Router = Router();

router.get("/", findManyAccountHandler);
router.get("/:id", findOneAccountHandler);
router.get("/:id/assets-balance", getAccountAssetsBalanceHandler);

router.post("/:id/open", openAccountHandler);
router.post(
  "/",
  // validateRequest(createAccountSchema),
  createAccountHandler
);
router.put("/:id", updateAccountHandler);
router.delete("/:id", deleteAccountHandler);

export const AccountRoutes = router;
