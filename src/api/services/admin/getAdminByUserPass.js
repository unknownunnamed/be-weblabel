const model = require("../../model/model");

const getAdminByUserPass = async (username, password) => {
  return model.admin
    .findAll({
      where: {
        username,
        password,
      },
    })
    .catch(() => []);
};

module.exports = getAdminByUserPass;
