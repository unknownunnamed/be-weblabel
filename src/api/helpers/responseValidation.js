const { validationResult } = require("express-validator");

const responseValidation = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return true;
  }
};

module.exports = responseValidation;