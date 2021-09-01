"use strict";
const assert = require("assert");
const request = require("supertest");
const app = require("../app.js");

describe("COIN API tests", function () {

  const token = null;
  const coinId = "uniswap";
  const userTest = { username: "admin", password: "password" };

  before(function (done) {
    request(app)
      .post("/auth/login")
      .send({ username: userTest.username, password: userTest.password })
      .end(function (err, res) {
        token = res.body.data.token;
        done();
      });
  });

  it("Should get all coins", function (done) {
    request(app)
      .get("/coins")
      .set("Authorization", "Bearer " + token)
      .expect(200, done);
  });

});
