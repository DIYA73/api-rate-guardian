import request from "supertest";
import app from "../src/app";

describe("Auth", () => {
  it("should login admin", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        username: "admin",
        password: "admin123",
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
