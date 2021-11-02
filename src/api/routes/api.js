const express = require('express');
const router = express.Router();
const admin = require('./admin');
const userlabel = require('./userlabel');
const berita = require('./berita');
const label = require('./label');

router.use('/admin', admin);
router.use('/userlabel', userlabel);
router.use('/berita', berita);
router.use('/label', label);

module.exports = router;