const services = require('../../services');
const responseAPI = require('../../helpers/response');
const responseValidation = require('../../helpers/responseValidation');

const add = async (req, res) => {
    const isNotValid = responseValidation(req, res);
    if (isNotValid) return;
    try {
        const data = await services.berita.add(req.body);
        responseAPI(res, 200, "success", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), []);
    }
}

module.exports = add;