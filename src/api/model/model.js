const admin = require('./admin');
const berita = require('./berita');
const label = require('./label');
const userlabel = require('./userlabel');

userlabel.hasMany(label, { onDelete: 'CASCADE' });
label.belongsTo(userlabel, { onDelete: 'CASCADE' });
berita.hasMany(label, { onDelete: 'CASCADE' });
label.belongsTo(berita, { onDelete: 'CASCADE' });

const model = {
    admin,
    berita,
    label,
    userlabel,
};

module.exports = model;