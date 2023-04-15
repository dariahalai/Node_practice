const Joi = require("joi");

const booksScheme = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string(),
  plot: Joi.string().required(),
  isRead: Joi.boolean(),
});

const booksValidator = (req, res, next) => {
  const { body } = req;
  const { error } = booksScheme.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

const putBooksScheme = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  image: Joi.string(),
  plot: Joi.string(),
  isRead: Joi.boolean(),
});

const putBookValidator = (req, res, next) => {
  const { body } = req;
  const isEmpty = Object.keys(body).length;
  if (!isEmpty) {
    res.status(400).json({ message: "missing fields" });
  }

  const { error } = putBooksScheme.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

const patchBooksScheme = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  image: Joi.string(),
  plot: Joi.string(),
  isRead: Joi.boolean(),
});

const patchBookStatusValidator = (req, res, next) => {
  const { body } = req;
  if (!body.isRead) {
    res.status(400).json({ message: 'missing "isRead" field' });
    return;
  }
  if (Object.keys(body).length !== 1) {
    res.status(400).json({ message: "extra keys in object" });
  }

  const { error } = patchBooksScheme.validate(body);
  if (error) {
    res.status(400).json({
      message: ` ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

module.exports = { booksValidator, putBookValidator, patchBookStatusValidator };
