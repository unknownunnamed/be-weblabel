const express = require('express');
const controllers = require('../controllers');
const validation = require('../validation');
const router = express.Router();


router.post('/', ...validation.berita, controllers.berita.add);
router.get('/', controllers.berita.get);
router.get('/:id', controllers.berita.getById);
router.put('/:id', ...validation.berita, controllers.berita.update);
router.delete('/:id', controllers.berita.deleted);

module.exports = router;