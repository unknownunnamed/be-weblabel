const services = require('../../services');
const responseAPI = require('../../helpers/response');

const getById = async (req, res) => {
    try {
        const data = await services.berita.getById(req.params.id);
        responseAPI(res, 200, "success", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), []);
    }
};

module.exports = getById;