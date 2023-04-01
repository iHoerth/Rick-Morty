const express = require("express");
const router = express.Router();
const myFavorites = require('../utils/favs')

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");


router.get('/rickandmorty/fav', (req,res) => {
  const {character} = req.body
})


router.post('/rickandmorty/fav', (req,res) => {
  const {character} = req.body
  try {
    myFavorites.push(character);
    res.status(200).json({status: 'ok'})
  } catch (error) {
    // por ahora hardcode "error"
    res.status(400).json({error: 'error'})
  }

})


router.get("/rickandmorty/onsearch/:id", (req, res) => {
  const { id } = req.params;
  try {
    // const result = getCharById(id);
    res.status(200).json({ succes: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/rickandmorty/detail/:id", (req, res) => {
  const { id } = req.params;
  try {
    const result = getCharDetail(id);
    res.status(200).json({ succes: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
