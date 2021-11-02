const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const api = require("./api/routes/api.js");

const app = express();

app.use(
  express.json({
    limit: "20mb",
  })
);

app.use(cors());

app.use(fileUpload({ 
  createParentPath: true 
}));

app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use("/api", api);

app.listen(5050, () => {
  console.log("Server started on port 5050");
});
