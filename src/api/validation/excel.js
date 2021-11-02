const { body } = require("express-validator");

const excel = [
  body("fileExcel")
    .notEmpty()
    .withMessage("File Excel is required")
    // .custom((value, { req }) => {
    //   if (!req.files) throw new Error("File Excel is required");
    //   return true;
    // }),
];

module.exports = excel;
