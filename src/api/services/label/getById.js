const model = require('../../model/model');

const getById = (id) => model.label.findAll({ where: { id } }).catch((_) => []);

module.exports = getById;