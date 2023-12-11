const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const app = express();

dbConnection();

app.use(express.static("public"));

app.use(express.json());

app.use("/api/entries", require("./routes/entries"));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT + " - OK");
});
