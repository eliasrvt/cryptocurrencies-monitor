const joi = require("@hapi/joi");

const schema = {
  topData: joi.object({
    limit: joi.number().required().max(25),
    order: joi.any().valid("asc", "desc").optional(),
  }),
};

module.exports = schema;
