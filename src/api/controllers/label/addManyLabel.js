const services = require("../../services");
const responseAPI = require("../../helpers/response");
const responseValidation = require("../../helpers/responseValidation");

const addManyLabel = async (req, res) => {
  const isNotValid = responseValidation(req, res);
  if (isNotValid) return;
  try {
    const { idUserLabel, jumlahBerita } = req.body;
    const berita = await services.berita.getWithLabel();
    const newBerita = berita.filter(
      (e) =>
        e.labels.length < 3 &&
        e.labels.filter((el) => el.userlabelId.toString() === idUserLabel.toString()).length < 1
    );
    let index = 0;
    for ( const e of newBerita ) {
        if (index < jumlahBerita)
          await services.label.add({
            userlabelId: idUserLabel,
            beritumId: e.id,
          });
        index += 1;
    }
    const dataReturn = await services.label.get();
    responseAPI(res, 200, "success", dataReturn);
  } catch (error) {
    responseAPI(res, 400, error.toString(), []);
  }
};

module.exports = addManyLabel;