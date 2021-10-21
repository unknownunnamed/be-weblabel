const services = require('../../services');
const responseAPI = require('../../helpers/response');

const get = async (req, res) => {
    try {
        const data = await services.berita.get();
        responseAPI(res, 200, "success", data);
    } catch (error) {
        responseAPI(res, 400, error.toString(), [])
    }
}

module.exports = get;