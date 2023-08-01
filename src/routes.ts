import { Application, Router } from "express";
import { AccountRoutes } from "./account/route";

import { UserRoutes } from "./user/route";
import { AuthRoutes } from "./auth/route";

import { KYCRoutes } from "./kyc/route";
import { AssetsRoutes } from "./assets/route";
import { CourseRoutes } from "./course/route";
import { ResultRoutes } from "./result/route";
import { TradesRoutes } from "./trades/route/index";

const router: Router = Router();

// Add more routes here
router.use("/account", AccountRoutes);
router.use("/assets", AssetsRoutes);
router.use("/course", CourseRoutes);
// router.use("/agreement-previews", AgreementPreviewsRoutes);
// router.use("/contacts", ContactRoutes);
router.use("/kyc", KYCRoutes);
router.use("/trades", TradesRoutes);
// router.use("/quotes", QuotesRoutes);
router.use("/result", ResultRoutes);
router.use("/session", ResultRoutes);
router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);
// router.use("/token-assets", TokenAssetRoutes);

const routes = (app: Application) => {
  app.use("/api/v1", router);
};

export default routes;
