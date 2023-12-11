/*
Rutas leer y crear entradas en el blog
host + /api/entries
*/

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { getEntries, createEntry } = require("../controllers/entries");
const { validateForm } = require("../middleware/validateForm");

router.get("/", getEntries);

router.post(
  "/create",
  [
    check("title", "El titulo es requierido").not().isEmpty(),
    check("content", "El contenido es requerido").not().isEmpty(),
    check("author", "El autor es requerido").not().isEmpty(),
    check("date", "La fecha es requerida").not().isEmpty(),
    validateForm,
  ],
  createEntry
);

module.exports = router;
