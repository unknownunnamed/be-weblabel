const model = require("../../model/model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getWithCountLabel = (id) =>
  model.berita
    .findOne({
      include: [
        {
          model: model.label,
          as: "labels",
          where: {
            [Op.and]: [
              {
                userlabelId: {
                  [Op.eq]: id,
                },
              },
              {
                label: {
                    [Op.is]: null,
                }
              }
            ],
          },
        },
      ],
      group: [Sequelize.col("berita.id")],
    })
    .catch((error) => error.toString());

module.exports = getWithCountLabel;
