"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("Rate limiting", () => {
    it("blocks after too many requests", async () => {
        const agent = supertest_1.default.agent(app_1.default);
        for (let i = 0; i < 20; i++) {
            await agent.get("/health");
        }
        const res = await agent.get("/health");
        expect([403, 429]).toContain(res.status);
    });
});
