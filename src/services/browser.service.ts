import puppeteer, { Browser } from "puppeteer-core";
import chromium from "@sparticuz/chromium";

class BrowserService {
  private browser: Browser | null = null;

  public async init(): Promise<void> {
    if (this.browser) return;

    console.log("🚀 Launching Chromium...");

    this.browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
      defaultViewport: {
        width: 1080,
        height: 1080,
        deviceScaleFactor: 2,
      },
    });

    console.log("✅ Chromium Started");
  }

  public getBrowser(): Browser {
    if (!this.browser) {
      throw new Error("Browser is not initialized");
    }

    return this.browser;
  }

  public async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

export default new BrowserService();