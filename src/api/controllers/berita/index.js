const add = require('./add');
const addUseExcel = require('./addUseExcel');
const deleted = require('./deleted');
const get = require('./get');
const getWithCountLabel = require('./getWithLabelCount')
const getById = require('./getById');
const update = require('./update');
const getWithLabel = require('./getWithLabel');

const berita = {
    add,
    addUseExcel,
    deleted,
    get,
    getWithCountLabel,
    getById,
    update,
    getWithLabel,
};

module.exports = berita;