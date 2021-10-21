const model = require('../../model/model');

const update = (data, id) => {
    return model.berita.update(data, {
        where: {
            id,
        }
    }).catch((_) => []);
};

module.exports = update;