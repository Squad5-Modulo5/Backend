import { Router } from "express";
import userRoutes from "./user.routes.js";
import adminRoutes from "./admin.routes.js";
import {ProductRoutes} from "./Products.routes.js";
import {ConsumptionRoutes} from "./Consumption.routes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/admin", adminRoutes);
routes.use( ProductRoutes)
routes.use("/consumpition", ConsumptionRoutes)

export { routes };
