const express = require("express");
const controllers = require('../controllers')
const validation = require("../validation");
const router = express.Router();

router.post("/login", ...validation.userPassValidation, controllers.admin.checkLogin);

module.exports = router;
