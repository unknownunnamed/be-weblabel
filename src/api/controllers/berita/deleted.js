const services = require("../../services");
const responseAPI = require("../../helpers/response");

const deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await services.berita.getById(req.params.id);
    const isDelete = await services.berita.deleted(req.params.id);
    console.log(isDelete);
    responseAPI(res, 200, isDelete === 0 ? "gagal" : "success", data);
  } catch (error) {
    responseAPI(res, 400, error.toString(), []);
  }
};

module.exports = deleted;
