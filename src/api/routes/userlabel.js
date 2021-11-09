const express = require('express');
const controllers = require('../controllers');
const validation = require('../validation');
const router = express.Router();

router.post('/', ...validation.userPassValidation, controllers.userlabel.add);
router.post('/login', ...validation.userPassValidation, controllers.userlabel.checkLogin);
router.get('/', controllers.userlabel.get);
router.get('/:id', controllers.userlabel.getById);
router.put('/:id', ...validation.userPassValidation, controllers.userlabel.update);
router.delete('/:id', controllers.userlabel.deleted);

module.exports = router;