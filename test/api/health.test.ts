import * as supertest from "supertest";
import * as superagent from "superagent";
import Application from "../../src/application/Application";


const app = Application.initialize();

describe("GET /health", () => {
    it("should return 200 OK", () => {
       return supertest(app).get("/health").then((response: superagent.Response) => {
            expect(response.status).toBe(200);
       });
    });
});