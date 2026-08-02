import { NextFunction, Request, Response } from "express";

import renderService from "../services/render.service.js";
import newsService from "../services/news.service.js";

class RenderController {
  /**
   * Generic HTML Renderer
   * POST /render
   */
  public async render(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { html, width, height } = req.body;

      const image = await renderService.render({
        html,
        width,
        height,
      });

      const result = await newsService.renderNews(req.body);

res.json({
  success: true,
  image: result.url,
  publicId: result.publicId,
});
    } catch (error) {
      next(error);
    }
  }

  /**
   * News Renderer
   * POST /render/news
   */
  public async renderNews(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      
      const result = await newsService.renderNews(req.body);

      res.json({
        success: true,
        image: result.url,
        publicId: result.publicId,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new RenderController();