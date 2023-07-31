import { Application, Router } from "express";
import { AccountRoutes } from "./account/route";
import { AgreementPreviewsRoutes } from "./agreement-previews/route";
import { ProductRoutes } from "./product/route";
import { UserRoutes } from "./user/route";
import { AuthRoutes } from "./auth/route";
import { SessionRoutes } from "./session/route";
import { ContactRoutes } from "./contact/route";
import { KYCRoutes } from "./kyc/route";
import { AssetsRoutes } from "./assets/route";
import { TokenAssetRoutes } from "./tokenAssets/route";
import { QuotesRoutes } from "./quotes/route";
import { TradesRoutes } from "./trades/route/index";

const router: Router = Router();

// Add more routes here
router.use("/account", AccountRoutes);
router.use("/assets", AssetsRoutes);
router.use("/agreement-previews", AgreementPreviewsRoutes);
router.use("/contacts", ContactRoutes);
router.use("/kyc", KYCRoutes);
router.use("/trades", TradesRoutes);
router.use("/quotes", QuotesRoutes);
router.use("/products", ProductRoutes);
router.use("/session", SessionRoutes);
router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);
router.use("/token-assets", TokenAssetRoutes);

const routes = (app: Application) => {
  app.use("/api/v1", router);
};

export default routes;
