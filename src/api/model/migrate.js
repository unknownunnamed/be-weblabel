const { admin, berita, label, userlabel } = require("./model");

admin
  .sync({ force: true })
  .then(() =>
    admin.create({ username: "adminweblabel", password: "label019" })
  );
label.sync({ force: true });
berita.sync({ force: true }).then(() => label.sync({ force: true }));
userlabel.sync({ force: true }).then(() => label.sync({ force: true }));
