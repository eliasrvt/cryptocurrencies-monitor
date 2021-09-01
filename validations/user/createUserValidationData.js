const joi = require("@hapi/joi");

const schema = {
  user: joi.object({
    name: joi.string().required(),
    lastname: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().alphanum().min(8).required(),
    preferred_money: joi.any().valid("ARS", "USD", "EUR").required(),
  }),
};

module.exports = schema;
