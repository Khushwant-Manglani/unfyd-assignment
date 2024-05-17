import { ApiError } from "../utils/ApiError.js";
import { z } from "zod";
import { asyncHandler } from "../utils/asyncHandler.js";

const customerSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  email: z.string().email(),
  mobileNo: z.string().regex(/^\+\d{1,3}-[\d\s()-]{4,14}$/),
  address: z.string().min(1).max(255),
  pincode: z.string().regex(/^\d{6}$/),
});

const validateCustomer = asyncHandler((req, res, next) => {
  try {
    customerSchema.parse(req.body);
    next();
  } catch (err) {
    throw new ApiError(
      400,
      "Validation error encountered while validating customer information."
    );
  }
});

export { validateCustomer };
