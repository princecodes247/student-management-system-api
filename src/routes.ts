import { Application, Router } from "express";
import { AccountRoutes } from "./account/route";

import { UserRoutes } from "./user/route";
import { AuthRoutes } from "./auth/route";
import { AssetsRoutes } from "./assets/route";
import { CourseRoutes } from "./course/route";
import { ResultRoutes } from "./result/route";
import { DepartmentRoutes } from "./department/route";
import { FacultyRoutes } from "./faculty/route";
import { ProfileRoutes } from "./profile/route";
import { EnrollmentRoutes } from "./enrollment/route";

const router: Router = Router();

// Add more routes here
router.use("/account", AccountRoutes);
router.use("/assets", AssetsRoutes);
router.use("/course", CourseRoutes);
router.use("/department", DepartmentRoutes);
router.use("/enrollment", EnrollmentRoutes);
router.use("/faculty", FacultyRoutes);
router.use("/profile", ProfileRoutes);
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
