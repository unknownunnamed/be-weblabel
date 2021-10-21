const model = require("../../model/model");

const getById = (id) =>
  model.berita.findAll({ where: { id } }).catch((_) => []);

module.exports = getById;
