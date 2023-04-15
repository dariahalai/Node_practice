const Joi = require("joi");

const contactScheme = Joi.object({
  name: Joi.string().required(),
  number: Joi.number().required(),
});

const contactValidator = (req, res, next) => {
  const { body } = req;
  const { error } = contactScheme.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

const putContactsScheme = Joi.object({
  name: Joi.string(),
  number: Joi.number(),
  // image: Joi.string(),
  // plot: Joi.string(),
  // isRead: Joi.boolean(),
});

const putContactValidator = (req, res, next) => {
  const { body } = req;
  const isEmpty = Object.keys(body).length;
  if (!isEmpty) {
    res.status(400).json({ message: "missing fields" });
  }

  const { error } = putContactsScheme.validate(body);
  if (error) {
    res.status(400).json({
      message: `missing required ${error.details[0].context.key} is not valid`,
    });
    return;
  }
  next();
};

// const patchBooksScheme = Joi.object({
//   title: Joi.string(),
//   author: Joi.string(),
//   image: Joi.string(),
//   plot: Joi.string(),
//   isRead: Joi.boolean(),
// });

// const patchBookStatusValidator = (req, res, next) => {
//   const { body } = req;
//   if (!body.isRead) {
//     res.status(400).json({ message: 'missing "isRead" field' });
//     return;
//   }
//   if (Object.keys(body).length !== 1) {
//     res.status(400).json({ message: "extra keys in object" });
//   }

//   const { error } = patchBooksScheme.validate(body);
//   if (error) {
//     res.status(400).json({
//       message: ` ${error.details[0].context.key} is not valid`,
//     });
//     return;
//   }
//   next();
// };

module.exports = { contactValidator, putContactValidator };
