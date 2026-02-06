import { Router } from "express";

const router = Router();

router.get("/admin", (_req, res) => {
  res.send(`
    <html>
      <head><title>API Rate Guardian</title></head>
      <body style="font-family: sans-serif">
        <h1>🛡 API Rate Guardian</h1>
        <ul>
          <li><a href="/docs">Swagger Docs</a></li>
          <li><a href="/admin/redis/stats">Redis Stats</a></li>
          <li>Status: ✅ Running</li>
        </ul>
      </body>
    </html>
  `);
});

export default router;
