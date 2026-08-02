import type { NewsRequest } from "../validators/news.validator.js";

import renderService from "./render.service.js";
import { generateNewsTemplate } from "../templates/news.template.js";
import cloudinaryService from "./cloudinary.service.js";

class NewsService {
  /**
   * Escape HTML special characters to prevent HTML injection.
   */
  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  public async renderNews(news: NewsRequest): Promise<{ url: string; publicId: string }> {
    const html = generateNewsTemplate({
      title: this.escapeHtml(news.title),
      summary: this.escapeHtml(news.summary),
      image: news.image,
    });

    const buffer = await renderService.render({
      html,
      width: 1080,
      height: 1080,
    });

    return cloudinaryService.uploadImage(buffer);
  }
}

export default new NewsService();