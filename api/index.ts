import { app } from "../server/_core/index";
import { serveStatic } from "../server/_core/vite";

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// Export the Express app as a Vercel Serverless function handler
export default app;
