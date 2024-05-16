import { ApiError } from "../utils/ApiError.js";

const errorHandling = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export { errorHandling };
