import express from "express";
import { errorHandling } from "./middlewares/errorHandling.middleware.js";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(errorHandling);

// routes import
import customerRouter from "./routes/customer.routes.js";

// routes declaration
app.use("/api/v1/customer", customerRouter);

export { app };
