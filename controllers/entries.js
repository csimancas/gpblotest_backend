const { response } = require("express");
const Entry = require("../models/entries");

const createEntry = async (req, res = response) => {
  try {
    const entry = new Entry(req.body);

    entry.save();

    res.status(201).json({
      ok: true,
      message: "Create entry",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error, please contact the administrator",
    });
  }
};

const getEntries = async (req, res = response) => {
  try {
    const entries = await Entry.find();

    res.json({
      ok: true,
      entries,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error, please contact the administrator",
    });
  }
};

module.exports = {
  getEntries,
  createEntry,
};
