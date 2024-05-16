import { Router } from "express";
import { createCustomer } from "../controllers/customer.controllers.js";
import { validateCustomer } from "../validate/customer.validate.js";

const router = Router();

router.route("/").post(validateCustomer, createCustomer);

export default router;
