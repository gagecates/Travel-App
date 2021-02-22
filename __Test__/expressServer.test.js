const app = require('../src/client/js/app')
const supertest = require('supertest')
const request = supertest(app)


it("test post request to get coords endpoint on server", async done => {
    const response = await request.post("/coordinates");
    expect(response.status).toBe(200);
    done();
});