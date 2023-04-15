const Joi = require("joi");

const userSinupJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

const userSignupValidator = (req, res, next) => {
  const { body } = req;

  const { error } = userSinupJoiSchema.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

const userLoginJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

const userLoginValidator = (req, res, next) => {
  const { body } = req;

  const { error } = userLoginJoiSchema.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

module.exports = { userSignupValidator, userLoginValidator };
