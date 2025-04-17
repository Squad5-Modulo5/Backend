import { Router } from "express";
import { creatConsumptionalonecontroller, creatConsumptioncontroller,
    getallConsumptioncontroller
  } from "../Controllers/Consumption.controller.js";


const ConsumptionRoutes = Router();

ConsumptionRoutes.post("/createconsumpition/:id_Product", creatConsumptioncontroller)
ConsumptionRoutes.post("/lala",creatConsumptionalonecontroller)
ConsumptionRoutes.get("/ShowConsumptions", getallConsumptioncontroller)


export{ConsumptionRoutes}