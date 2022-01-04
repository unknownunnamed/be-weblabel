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
    const { jumlahData } = req.body;
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
          if (jumlahData == 0) {
            dataExcel.Sheet.forEach((e) =>
              services.berita.add({
                judul: e.judul,
                sumber: e.link,
                isi: e.text,
              })
            );
          } else {
            let counter = 0;
            for(let e of dataExcel.Sheet){
              if(counter < jumlahData) {
                services.berita.add({
                  judul: e.judul,
                  sumber: e.link,
                  isi: e.text,
                });
              }
              counter+=1;
            }
          }
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
