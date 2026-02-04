import request from "supertest";
import app from "../src/app";

describe("Rate limiting", () => {
  it("blocks after too many requests", async () => {
    const agent = request.agent(app);

    for (let i = 0; i < 20; i++) {
      await agent.get("/health");
    }

    const res = await agent.get("/health");
    expect([403, 429]).toContain(res.status);
  });
});
