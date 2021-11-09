const model = require('../../model/model');

const get = () => model.userlabel.findAll().catch((_) => []);

module.exports = get;