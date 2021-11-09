const services = require('../../services');
const responseAPI = require('../../helpers/response');
const responseValidation = require('../../helpers/responseValidation');

const update = async (req, res) => {
    const isNotValid = responseValidation(req, res);
    if (isNotValid) return;
    try {
        const id = req.params.id;
        const update = await services.userlabel.update(req.body, id);
        const data = await services.userlabel.getById(id);
        responseAPI(res, 200, update[0] === 1 ? "success" : "gagal", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), []);
    }
};

module.exports = update;