const request = require('supertest')
const app = require('../src/server/server')

describe("Test index endpoint", () => {
    test("response from express endpoint", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });
});