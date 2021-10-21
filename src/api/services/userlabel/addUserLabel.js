const model = require("../../model/model");

const addUserLabel = async (data) => {
  return model.userlabel
    .create(data)
    .catch((_) => []);
};

module.exports = addUserLabel;
