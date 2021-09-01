"use strict";

constr request = require("supertest");
constr app = require("../app.js");

describe("USER API tests", function () {

  const token = null;
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

  it("Should get user Top Coins", function (done) {
    request(app)
      .get("/users/top")
      .query({ limit: 10 })
      .set("Authorization", "Bearer " + token)
      .expect(200, done);
  });

  it("Should add coin to user", function (done) {
    request(app)
      .post("/coins")
      .set("Authorization", "Bearer " + token)
      .send({ coin_external_id: coinId })
      .expect(201, done);
  });
});
