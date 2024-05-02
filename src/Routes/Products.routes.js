import { Router } from "express";
import {createProductcontroller, getAllProductscontroller, deletePoductcontroller} from "../Controllers/product.controller.js";

const ProductRoutes = Router();

ProductRoutes.post("/creatproducts", createProductcontroller);
ProductRoutes.get("/showproducts", getAllProductscontroller);
ProductRoutes.delete("/deleteproduct/:id", deletePoductcontroller)

export {ProductRoutes}