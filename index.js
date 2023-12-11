const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Direcrorio publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

app.use("/api/entries", require("./routes/entries"));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT + " - OK");
});
