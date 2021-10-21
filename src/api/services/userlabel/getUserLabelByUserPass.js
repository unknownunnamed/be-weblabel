const model = require("../../model/model");

const getUserLabelByUserPass = async (data) => {
  const { username, password } = data;
  return model.userlabel
    .findAll({
      where: { username, password }
    })
    .catch((_) => []);
};

module.exports = getUserLabelByUserPass;
