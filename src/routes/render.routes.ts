import { Router } from "express";

import renderController from "../controllers/render.controller.js";
import { validate } from "../middleware/validate.middleware.js";

import { renderSchema } from "../validators/render.validator.js";
import { newsSchema } from "../validators/news.validator.js";

const router = Router();

/**
 * Generic HTML Renderer
 */
router.post(
  "/",
  validate(renderSchema),
  renderController.render,
);

/**
 * News Renderer
 */
router.post(
  "/news",
  validate(newsSchema),
  renderController.renderNews,
);

export default router;