import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import renderRoutes from "./routes/render.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));


app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "HTML Render Service is running.",
  });
});
app.use("/render", renderRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;