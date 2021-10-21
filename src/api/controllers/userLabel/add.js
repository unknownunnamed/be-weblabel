const services = require('../../services');
const responseAPI = require('../../helpers/response');
const responseValidation = require('../../helpers/responseValidation');

const addUserLabel = async (req, res) => {
    const isError = responseValidation(req, res);
    if (isError) return;
    try {
        // const { username, password } = req.body;
        const data = await services.userlabel.addUserLabel(req.body);
        responseAPI(res, 200, "success", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), [])
    }
}

module.exports = addUserLabel;