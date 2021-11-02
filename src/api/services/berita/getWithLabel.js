const model = require("../../model/model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getWithLabel = () =>
  model.berita
    .findAll({
      include: [
        {
          model: model.label,
          as: "labels",
        },
      ],
    })
    .catch((error) => error.toString());

module.exports = getWithLabel;
