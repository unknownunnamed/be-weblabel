const model = require("../../model/model");

const getById = (id) =>
  model.userlabel.findOne({ where: { id } }).catch((_) => []);

module.exports = getById;
