const model = require("../../model/model");

const update = (data, id) =>
  model.label.update(data, { where: { id } }).catch((_) => []);

module.exports = update;
