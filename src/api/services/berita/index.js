const get = require('./get');
const getById = require('./getById');
const add = require('./add');
const update = require('./update');
const deleted = require('./delete');
const getWithCountLabel = require('./getWithCountLabel');
const getWithLabel = require('./getWithLabel');

const berita = {
    get,
    getWithCountLabel,
    getById,
    add,
    update,
    deleted,
    getWithLabel,
};

module.exports = berita;