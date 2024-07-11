import { Router } from "express";
import {createProductcontroller, getAllProductscontroller, deletePoductcontroller} from "../Controllers/product.controller.js";
import { authUser } from "../Middlewares/user/auth/authUser.middleware.js";
const ProductRoutes = Router();

ProductRoutes.post("/creatproducts/:id_User",authUser, createProductcontroller);
ProductRoutes.get("/showproducts/:id_User", getAllProductscontroller);
ProductRoutes.delete("/deleteproduct/:id", deletePoductcontroller)

export {ProductRoutes}