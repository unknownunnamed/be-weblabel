const model = require("../../model/model");

const getById = (id) =>
  model.berita.findOne({ where: { id } }).catch((_) => []);

module.exports = getById;
