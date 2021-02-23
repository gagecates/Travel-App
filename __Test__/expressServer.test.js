// Test the express server
//import { app } from '../src/server/server'
const app = require('../src/server/server')// Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('Testing /all endpoint', async done => {
  const response = await request.get('/test')
  expect(response.status).toBe(200) // check if request was successfull
  expect(response.body).toBeDefined(); // check if response returned value of projecteData
  done();
});