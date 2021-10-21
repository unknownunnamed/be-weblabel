const express = require('express');
const router = express.Router();
const admin = require('./admin');
const userlabel = require('./userlabel');
const berita = require('./berita');

router.use('/admin', admin);
router.use('/userlabel', userlabel);
router.use('/berita', berita);

module.exports = router;