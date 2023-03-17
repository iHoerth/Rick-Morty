import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction, logout as logoutAction } from './redux/actions';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";

import "./App.css";
import { user1 } from "./helpers/constants.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const access = useSelector(({ access }) => access);
  const loginFailure = useSelector(({ loginFailure }) => loginFailure);
  const myFavorites = useSelector((state) => state.myFavorites)
  const dispatch = useDispatch()

  const favoriteCharacters = characters.filter(char => myFavorites.find(({id}) => id === char.id ));

  const login = (userData) => dispatch(loginAction(userData));
  const logout = () => {
    dispatch(logoutAction());
    navigate('/');
  }

  useEffect(() => {
    getRandomChar();
  }, []);

  const getCharById = (charId) => {
    fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!charAlreadyBeingShown(charId)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Ese personaje ya esta siendo mostrado.");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const closeCard = (charId) => {
    const result = characters.filter((char) => char.id !== charId);
    setCharacters([...result]);
  };

  const getRandomChar = () => getCharById(Math.floor(Math.random() * 826));

  const charAlreadyBeingShown = (charId) => !!characters.find((char) => parseInt(charId) === char.id);

  const deleteAllChars = () => setCharacters([]);

  return (
    <div className="App" style={{ minHeight: "970px" }}>
      <Nav access={access} getCharById={getCharById} getRandomChar={getRandomChar} deleteAllChars={deleteAllChars} logout={logout} />
      {access ? (
        <Routes>
          <Route path="/" element={<Cards to={"/home"} characters={characters} closeCard={closeCard} />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Cards characters={characters} closeCard={closeCard} />} />
          <Route path="/favorites" element={<Cards characters={favoriteCharacters} closeCard={closeCard} />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Cards to={"/home"} characters={characters} closeCard={closeCard} />} />
        </Routes>
      ) : <Form login={login} loginFailure={loginFailure} />}
    </div>
  );
}

export default App;
