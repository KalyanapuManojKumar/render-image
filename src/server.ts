import app from "./app.js";
import  env  from "./config/env.js";
import browserService from "./services/browser.service.js";

async function bootstrap() {
  await browserService.init();

  const server = app.listen(env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);
  });

  const shutdown = async () => {
    console.log("Shutting down...");

    await browserService.close();

    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);

  process.on("SIGTERM", shutdown);
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});