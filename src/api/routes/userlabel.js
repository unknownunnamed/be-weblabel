const express = require('express');
const controllers = require('../controllers');
const validation = require('../validation');
const router = express.Router();

router.post('/', ...validation.userPassValidation, controllers.userlabel.add);
router.post('/login', ...validation.userPassValidation, controllers.userlabel.checkLogin);

module.exports = router;