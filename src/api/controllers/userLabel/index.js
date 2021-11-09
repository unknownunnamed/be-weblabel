const add = require('./add');
const checkLogin = require('./checkLogin');
const get = require('./get');
const getById = require('./getById');
const update = require('./update');
const deleted = require('./deleted');

const userlabel = {
    add,
    checkLogin,
    get,
    getById,
    update,
    deleted,
};

module.exports = userlabel;