const model = require('../../model/model');

const add = async (data) => model.label.create(data).catch((_) => []);

module.exports = add;