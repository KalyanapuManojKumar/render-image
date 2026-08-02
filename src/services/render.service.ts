import browserService from "./browser.service.js";

export interface RenderOptions {
  html: string;
  width?: number;
  height?: number;
}

class RenderService {
  async render({
    html,
    width = 1080,
    height = 1080,
  }: RenderOptions): Promise<Buffer> {
    let browser = await browserService.getBrowser();

    let page: Awaited<ReturnType<import("puppeteer").Browser["newPage"]>> | null = null;

    // Try to create a page; if the CDP connection was closed, restart browser once and retry.
    try {
      page = await browser.newPage();
    } catch (err) {
      console.warn("CDP connection failed when creating page, restarting Chromium...", err);
      try {
        await browserService.close();
      } catch (closeErr) {
        console.warn("Error closing browser during restart:", closeErr);
      }

      await browserService.init();
      browser = await browserService.getBrowser();

      page = await browser.newPage();
    }

    try {
      await page.setViewport({
        width,
        height,
        deviceScaleFactor: 2,
      });

      await page.setContent(html, {
        waitUntil: "load",
      });

      await page.emulateMediaType("screen");

      const buffer = await page.screenshot({
        type: "png",
        fullPage: false,
      });

      return Buffer.from(buffer);
    } finally {
      try {
           if (page && !(page as any).isClosed()) {
          await page.close();
        }
      } catch (closeErr) {
        console.warn("Failed to close page:", closeErr);
      }
    }
  }
}

export default new RenderService();