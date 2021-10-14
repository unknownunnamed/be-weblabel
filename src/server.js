const express = require("express");
const cors = require("cors");
const api = require("./router/api.js");

const app = express();

app.use(
  express.json({
    limit: "20mb",
  })
);

app.use(cors());

app.use('/api', api);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
