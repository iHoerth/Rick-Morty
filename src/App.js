import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Nav from './components/Nav/Nav.jsx'
import Form  from './components/Form/Form.jsx'
import About  from './components/About/About.jsx'
import './App.css'
/////////////////////////////////////////////////////////////

function App () {
  const [characters,setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([]);
    getRandomChar();
  },[])

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
 
  const charAlreadyBeingShown = (charId) => !!characters.find((char) => parseInt(charId) === char.id)

  const deleteAllChars = () => setCharacters([]);
  
  return (
    <div className='App' style={{ padding: '25px',minHeight:'920px' }}>
      <Nav getCharById={getCharById} getRandomChar={getRandomChar} deleteAllChars={deleteAllChars} />
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/home' element={<Cards characters={characters} closeCard={closeCard} />}/>
        <Route path='/detail/detail:id' element={<Cards characters={characters} closeCard={closeCard} />}/>
      </Routes>
    </div>
  )
}

export default App
