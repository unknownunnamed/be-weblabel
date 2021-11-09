const services = require("../../services");
const responseAPI = require("../../helpers/response");

const deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await services.userlabel.getById(req.params.id);
    const isDelete = await services.userlabel.deleted(req.params.id);
    responseAPI(res, 200, isDelete === 0 ? "gagal" : "success", data);
  } catch (error) {
    responseAPI(res, 400, error.toString(), []);
  }
};

module.exports = deleted;
