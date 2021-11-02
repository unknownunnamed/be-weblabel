const excelToJson = require("convert-excel-to-json");
const del = require("del");
const services = require("../../services");
const responseAPI = require("../../helpers/response");
const responseValidation = require("../../helpers/responseValidation");

const addUseExcel = async (req, res) => {
  const isNotValid = responseValidation(req, res);
  if (isNotValid) return;
  try {
    const { fileExcel } = req.files;
    if (fileExcel && fileExcel.name.split(".").slice(-1)[0] === "xlsx") {
      fileExcel.mv(`./tmp/${fileExcel.name}`, (err) => {
        if (err) {
          responseAPI(res, 400, error.toString(), []);
        } else {
          const dataExcel = excelToJson({
            sourceFile: `./tmp/${fileExcel.name}`,
            header: { rows: 1 },
            columnToKey: {
              A: "judul",
              B: "link",
              D: "text",
            },
          });
          dataExcel.Sheet.forEach((e) =>
            services.berita.add({
              judul: e.judul,
              sumber: e.link,
              isi: e.text,
            })
          );
          del([`./tmp/${fileExcel.name}`]);
          responseAPI(res, 200, "success", []);
          return;
        }
      });
    } else {
      responseAPI(res, 400, "error, data must be Excel", []);
    }
  } catch (error) {
    responseAPI(res, 400, error.toString(), []);
  }
};

module.exports = addUseExcel;
