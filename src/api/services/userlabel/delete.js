const model = require('../../model/model');

const deleted = (id) => {
    return model.userlabel.destroy({ where: { id } }).catch((_) => []);
}

module.exports = deleted;