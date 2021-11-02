const model = require('../../model/model');

const add = (data) => model.label.create(data).catch((_) => []);

module.exports = add;