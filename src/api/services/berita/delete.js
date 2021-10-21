const model = require('../../model/model');

const deleted = (id) => {
    return model.berita.destroy({ where: { id } }).catch((_) => []);
}

module.exports = deleted;