const get = require('./get');
const getById = require('./getById');
const add = require('./add');
const update = require('./update');
const deleted = require('./delete');

const berita = {
    get,
    getById,
    add,
    update,
    deleted,
};

module.exports = berita;