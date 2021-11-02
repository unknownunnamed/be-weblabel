const model = require('../../model/model');

const get = () => model.label.findAll().catch((_) => []);

module.exports = get;