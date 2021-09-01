const joi = require("@hapi/joi");

const schema = {
  loginData: joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
  }),
};

module.exports = schema;
