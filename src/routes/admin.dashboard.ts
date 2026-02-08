import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Rate Guardian – Admin</title>
        <style>
          body { font-family: Arial; background:#0f172a; color:#e5e7eb; padding:40px }
          .card { background:#020617; padding:20px; border-radius:12px }
          a { color:#38bdf8 }
        </style>
      </head>
      <body>
        <h1>🛡 API Rate Guardian</h1>
        <div class="card">
          <p>Status: ✅ Running</p>
          <p><a href="/docs">Swagger Docs</a></p>
          <p><a href="/admin/redis/stats">Redis Stats</a></p>
        </div>
      </body>
    </html>
  `);
});

export default router;
