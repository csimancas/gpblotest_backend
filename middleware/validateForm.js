const { response } = require("express");
const { validationResult } = require("express-validator");

const validateForm = (req, res = response, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      message: "Todos los campos son requeridos",
      errors: errors.mapped(),
    });
  }
  next();
};

module.exports = {
  validateForm,
};
