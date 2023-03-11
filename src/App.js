import { useEffect, useState } from 'react'

import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Nav from './components/Nav/Nav.jsx'

import './App.css'
/////////////////////////////////////////////////////////////

function App () {
  const [characters,setCharacters] = useState([]);

// este useEffect es para que cuando el componente se monte al inicio, borre los que quedaron renderizados y llame a la funcion get random
// que basicamente genera un personaje random, asi no esta vacia de prepo XD

  useEffect(() => {
    setCharacters([]);
    getRandomChar();
  },[])

// Le cambie el nombre a esta funcion, no me cierra onSearch.
  const getCharById = (charId) => {
    fetch(`https://rickandmortyapi.com/api/character/${charId}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if(!charAlreadyBeingShown(charId)){
              setCharacters((oldChars) => [...oldChars, data])
            } else {
              window.alert('Ese personaje ya esta siendo mostrado.')
            }
          } else {
            window.alert('No hay personajes con ese ID');
          }
       });
 }

 const closeCard = (charId) => setCharacters(characters.filter(char => char.id !== charId))
 
 //
 const getRandomChar = () => getCharById(Math.floor(Math.random()*826))
 
 //No se que nombre ponerle bien, pero creo que con ese nombre se entiende. 
 //La idea de esta funcion es fijarse si en nuestro array de characters (el estado) ya existe alguno con ese id.
  const charAlreadyBeingShown = (charId) => !!characters.find((char) => parseInt(charId) === char.id)

  const deleteAllChars = () => setCharacters([]);
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav getCharById={getCharById} getRandomChar={getRandomChar} deleteAllChars={deleteAllChars} />
      <hr />
      <Cards characters={characters} closeCard={closeCard} />
      <hr />
    </div>
  )
}

export default App
