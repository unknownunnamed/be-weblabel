const services = require('../../services');
const responseAPI = require('../../helpers/response');
const responseValidation = require('../../helpers/responseValidation');

const checkLogin = async (req, res) => {
    const isError = responseValidation(req, res);
    if (isError) return;
    try {
        const data = await services.userlabel.getUserLabelByUserPass(req.body);
        responseAPI(res, 200, "succcess", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), []);
    }
}

module.exports = checkLogin;