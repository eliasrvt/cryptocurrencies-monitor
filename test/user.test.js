"use strict";

const request = require("supertest");
const app = require("../app.js");

describe("USER API tests", function () {

  let token = null;
  const coinId = "uniswap";
  const userTest = { username: "admin", password: "password" };
  const nonExistentUser = { username: "nousername", password: "nopassword" };

  before(function (done) {
    request(app)
      .post("/auth/login")
      .send({ username: userTest.username, password: userTest.password })
      .end(function (err, res) {
        token = res.body.data.token;
        done();
      });
  });

  it("Login with non-existent user", function (done) {
    request(app)
      .post("/auth/login")
      .send({
        username: nonExistentUser.username,
        password: nonExistentUser.password,
      })
      .expect(500, done);
  });

  it("Login with wrong credentials", function (done) {
    request(app)
      .post("/auth/login")
      .send({
        username: userTest.username,
        password: "wrong_password",
      })
      .expect(500, done);
  });

  it("Login without credentials", function (done) {
    request(app)
      .post("/auth/login")
      .expect(200, done);
  });

  it("Should Register an user", function (done) {
    request(app)
      .post("/users/register")
      .send({
        name: "Juan",
        lastname: "Perez",
        username: "juanper1",
        password: "juanperespassword",
        preferred_money: "USD",
      })
      .expect(201, done);
  });

  it("Should get Validation Error - Request without data", function (done) {
    request(app)
      .post("/users/register")
      .expect(200, done);
  });

  it("Should return Error 500 - Username already in use", function (done) {
    request(app)
      .post("/users/register")
      .send({
        name: "Juan",
        lastname: "Perez",
        username: "juanper1",
        password: "juanperespassword",
        preferred_money: "USD",
      })
      .expect(500, done);
  });

  it("Should add coin to user", function (done) {
    request(app)
      .post("/coins")
      .set("Authorization", "Bearer " + token)
      .send({ coin_external_id: coinId })
      .expect(201, done);
  });

  it("Should not add repeating currencies to the user", function (done) {
    request(app)
      .post("/coins")
      .set("Authorization", "Bearer " + token)
      .send({ coin_external_id: coinId })
      .expect(200, done);
  });

  it("Should get Error 404 Coin Not Found", function (done) {
    request(app)
      .post("/coins")
      .set("Authorization", "Bearer " + token)
      .send({ coin_external_id: "nonExistentCoin" })
      .expect(500, done);
  });

  it("Should get Error Validation - coin_external_id is required", function (done) {
    request(app)
      .post("/coins")
      .set("Authorization", "Bearer " + token)
      .expect(200, done);
  });

  it("Should get Error Validation - limit must be less than 26", function (done) {
    request(app)
      .get("/users/top")
      .query({ limit: 100000 })
      .set("Authorization", "Bearer " + token)
      .expect(200, done);
  });

  it("Should get user Top Coins - ", function (done) {
    request(app)
      .get("/users/top")
      .query({ limit: 10 })
      .set("Authorization", "Bearer " + token)
      .expect(200, done);
  });

});
