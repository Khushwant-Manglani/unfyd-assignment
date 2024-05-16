import { Customer } from "../models/customer.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createCustomer = asyncHandler(async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res
      .status(201)
      .json(new ApiResponse(200, customer, "Customer is created successfully"));
  } catch (err) {
    throw new ApiError(400, "Something went wrong while creating an customer");
  }
});

export { createCustomer };
