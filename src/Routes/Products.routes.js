import { Router } from "express";
import {createProductcontroller, getAllProductscontroller, deletePoductcontroller} from "../Controllers/product.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
const ProductRoutes = Router();

ProductRoutes.post("/creatproducts/:id_User",authUser, createProductcontroller);
ProductRoutes.get("/showproducts", getAllProductscontroller);
ProductRoutes.delete("/deleteproduct/:id", deletePoductcontroller)

export {ProductRoutes}