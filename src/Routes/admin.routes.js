import express from "express";
const adminRouter = express.Router();
import AdminController from "../Controllers/admin.controller.js";
import { authUser } from "../Middlewares/user/auth/authUser.middleware.js";
import { isAdmin } from "../Middlewares/admin/authAdmin.middleware.js";
import { promoteAdminValidator } from "../Middlewares/user/validations/promoteAdminValidation.js";
import { handleValidationResult } from "../Middlewares/user/validations/validationResult.middleware.js";

adminRouter.route("/").get(authUser, isAdmin, AdminController.getAllUsers);

adminRouter
  .route("/:id")
  .delete(authUser, isAdmin, AdminController.deleteUsers);

adminRouter
  .route("/promote/:id")
  .put(
    promoteAdminValidator,
    handleValidationResult,
    authUser,
    isAdmin,
    AdminController.promoteUsersToAdmin,
  );

export default adminRouter;