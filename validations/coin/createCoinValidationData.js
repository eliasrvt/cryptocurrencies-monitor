const joi = require("@hapi/joi");

const schema = {
  coinData: joi.object({
    coin_external_id: joi.string().required(),
  }),
};

module.exports = schema;
