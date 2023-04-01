const getCharDetail = (res, id) => {
  //por ahora copy paste de getCharById
  fetch(` https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => {
      const newCharacter = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        image: data.image,
        species: data.species,
      };
      res.status(200).json(newCharacter);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = getCharDetail;
