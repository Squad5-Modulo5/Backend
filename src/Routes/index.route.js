import { Router } from "express";

import {ConsumptionRoutes} from "./Consumption.routes.js";

const routes = Router();


routes.use("/consumpition", ConsumptionRoutes)

export { routes };
