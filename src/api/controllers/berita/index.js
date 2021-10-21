const add = require('./add');
const deleted = require('./deleted');
const get = require('./get');
const getById = require('./getById');
const update = require('./update');

const berita = {
    add,
    deleted,
    get,
    getById,
    update,
};

module.exports = berita;