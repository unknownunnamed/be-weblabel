const express = require('express');
const controllers = require('../controllers');
const validation = require('../validation');
const router = express.Router();


router.post('/', ...validation.berita, controllers.berita.add);
router.post('/excel', controllers.berita.addUseExcel);
router.get('/', controllers.berita.get);
router.get('/label/:id', controllers.berita.getWithCountLabel);
router.get('/:id', controllers.berita.getById);
router.put('/:id', ...validation.berita, controllers.berita.update);
router.delete('/:id', controllers.berita.deleted);

module.exports = router;