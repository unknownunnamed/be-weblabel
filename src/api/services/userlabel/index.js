const addUserLabel = require('./addUserLabel');
const getUserLabelByUserPass = require('./getUserLabelByUserPass');
const get = require('./get');
const getById = require('./getById');
const update = require('./update');
const deleted = require('./delete');

const userlabel = {
    addUserLabel,
    get,
    getById,
    getUserLabelByUserPass,
    update,
    deleted,
};

module.exports = userlabel;