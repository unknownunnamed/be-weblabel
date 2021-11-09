const model = require("../../model/model");

const update = (data, id) =>
  model.userlabel.update(data, { where: { id } }).catch((_) => []);

module.exports = update;
