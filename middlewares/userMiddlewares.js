const { user } = require("../validations/user/createUserValidationData");
const respondSuccess = require("../utils/respondSuccess");

const responseData = {};

module.exports = {
  validateRequestData: async (req, res, next) => {
    const value = await user.validate(req.body);

    if (value.error) {
      responseData.message = value.error.details[0].message;
      return respondSuccess(res, responseData);
    } else {
      next();
    }
  },
  auth: (req, res, next) => {
    // Comprobar que existe el token
    if (!req.headers.authorization) {
      res.status(401).json({ message: "Unauthorized access" });
    } else {
      // Comrpobar la validez de este token
      let token = req.headers.authorization.split(" ")[1];

      jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
          res.status(500).json({
            message: "Something was wrong",
          });
        } else {
          User.findOne({ where: { username: decoded.user.username } }).then(
            (u) => {
              User.findByPk(u.id).then((user) => {
                req.user = user;
                next();
              });
            }
          );
        }
      });
    }
  },
};
