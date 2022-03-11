const services = require('../../services');
const responseAPI = require('../../helpers/response');
const writeXlsxFile = require('write-excel-file/node');

const getWithLabel = async (req, res) => {
    try {
        const data = await services.berita.getWithLabel();
        const dataWithLabel = data.map((e) => {
            return {
                id: e.id,
                judul: e.judul,
                link: e.sumber,
                sumber: e.sumber.split('/')[2].split('.')[1] == "kompas" ? "www.kompas.com" : e.sumber.split('/')[2].split('.')[1] == "suara" ? "www.suara.com" : e.sumber.split('/')[2],
                isi: e.isi,
                label: e.labels.filter((item) => item.label == 2).length >= 2 ? "Bukan Clickbait" : "Clickbait",
            }
        });
        const sumber = [];
        dataWithLabel.forEach(element => {
            sumber.filter((item) => item.sumber == element.sumber).length > 0 ? null : sumber.push({
                sumber: element.sumber,
                clickbait: dataWithLabel.filter((i) => i.sumber == element.sumber && i.label == "Clickbait")[0].id,
                notClickbait: dataWithLabel.filter((i) => i.sumber == element.sumber && i.label == "Bukan Clickbait")[0].id,
            });
        });
        sumber.forEach((element) => {
            dataWithLabel.filter((item) => item.id == element.clickbait)[0].statusData = "train";
            dataWithLabel.filter((item) => item.id == element.notClickbait)[0].statusData = "train";
            let count = 3;
            dataWithLabel.filter((item) => item.sumber == element.sumber).forEach((itemdata) => {
                if (count <= 80 && itemdata.id != element.clickbait && itemdata.id != element.notClickbait) {
                    dataWithLabel.filter((i) => itemdata.id == i.id)[0].statusData = "train";
                    count += 1;
                } else if (itemdata.id != element.clickbait && itemdata.id != element.notClickbait) {
                    dataWithLabel.filter((i) => itemdata.id == i.id)[0].statusData = "test";
                }
            });
        })

        const schema = [
            {
                column: 'id',
                type: Number,
                value: data => data.id,
            },
            {
                column: 'judul',
                type: String,
                value: data => data.judul,
            },
            {
                column: 'link',
                type: String,
                value: data => data.link,
            },
            {
                column: 'sumber',
                type: String,
                value: data => data.sumber,
            },
            {
                column: 'isi',
                type: String,
                value: data => data.isi,
            },
            {
                column: 'label',
                type: String,
                value: data => data.label,
            },
            {
                column: 'statusData',
                type: String,
                value: data => data.statusData,
            },
        ]
        const excel = await writeXlsxFile(dataWithLabel, {
            schema,
            filePath: '/datalabel.xlsx'
        });
        console.log(excel);
        responseAPI(res, 200, "success", dataWithLabel);
    } catch (error) {
        responseAPI(res, 400, error.toString(), []);
    }
};

module.exports = getWithLabel;