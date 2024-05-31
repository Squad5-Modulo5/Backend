import { Router } from "express";
import { creatConsumptioncontroller,
    getallConsumptioncontroller, 
    updateConsumptionscontroler, 
    updateIdprodctcontroller} from "../Controllers/Consumption.controller.js";

const ConsumptionRoutes = Router();

ConsumptionRoutes.post("/createconsumpition", creatConsumptioncontroller)
ConsumptionRoutes.get("/ShowConsumptions", getallConsumptioncontroller)
ConsumptionRoutes.patch("/updateresulteconsupion/:id_Consupitions", updateConsumptionscontroler)
ConsumptionRoutes.patch("/updateIdproduct/:id", updateIdprodctcontroller)

export{ConsumptionRoutes}