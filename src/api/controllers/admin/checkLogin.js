const responseAPI = require("../../helpers/response");
const services = require("../../services");
const responseValidation = require("../../helpers/responseValidation");

const checkLogin = async (req, res) => {
  const isError = responseValidation(req, res);
  if (isError) return;
  try {
    const { username, password } = req.body;
    const data = await services.admin.getAdminByUserPass(username, password);
    responseAPI(res, 200, "success", data);
  } catch (error) {
    responseAPI(res, 400, error.toString(), []);
  }
};

module.exports = checkLogin;
