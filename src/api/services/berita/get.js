const model = require("../../model/model");

const get = () => model.berita.findAll().catch((_) => []);

module.exports = get;
