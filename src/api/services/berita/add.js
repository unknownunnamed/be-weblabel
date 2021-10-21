const model = require("../../model/model");

const add = (data) => {
  return model.berita.create(data).catch((_) => []);
};

module.exports = add;
