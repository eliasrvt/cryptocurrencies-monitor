"use strict";

var assert = require("assert");
var request = require("supertest");
var app = require("../app.js");

describe("COIN API tests", function () {
  const user1 = { username: "eliasrava", password: "elias123123" };

  var token = null;
  var coinId = "uniswap";

  before(function (done) {
    request(app)
      .post("/auth/login")
      .send({ username: user1.username, password: user1.password })
      .end(function (err, res) {
        token = res.body.token;
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
