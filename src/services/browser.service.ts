import puppeteer, { Browser } from "puppeteer";

class BrowserService {
  private browser: Browser | null = null;

  public async init(): Promise<void> {
    if (this.browser) {
      return;
    }

    console.log("🚀 Launching Chromium...");

    this.browser = await puppeteer.launch({
      headless: true,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
  ],

      defaultViewport: {
        width: 1080,
        height: 1080,
        deviceScaleFactor: 2,
      },
    });

    console.log("✅ Chromium Started");
  }

  public async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      await this.init();
    }

    return this.browser!;
  }

  public async close(): Promise<void> {
    if (!this.browser) {
      return;
    }

    await this.browser.close();

    this.browser = null;

    console.log("🛑 Chromium Closed");
  }
}

export default new BrowserService();