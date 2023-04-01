const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");




router.get("/onsearch/:id", (req, res) => {
  const { id } = req.params;
  try {
    // const result = getCharById(id);
    res.status(200).json({ succes: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  try {
    // const result = getCharDetail(id);
    res.status(200).json({ succes: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
