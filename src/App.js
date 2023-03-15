import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import "./App.css";
import { user1 } from "./helpers/constants.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    if (
      userData.username === user1.username &&
      userData.password === user1.password
    ) {
      setAccess(true);
      navigate("/home");
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setAccess(false);
  };

  // useEffect(() => {
  //   if (access) {
  //     navigate("/home");
  //   } else {
  //     navigate("/");
  //   }
  //   console.log(access);
  // }, [access]);

  useEffect(() => {
    setCharacters([]);
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

  const closeCard = (charId) =>
    setCharacters(characters.filter((char) => char.id !== charId));

  const getRandomChar = () => getCharById(Math.floor(Math.random() * 826));

  const charAlreadyBeingShown = (charId) =>
    !!characters.find((char) => parseInt(charId) === char.id);

  const deleteAllChars = () => setCharacters([]);

  return (
    <div className="App" style={{ padding: "25px", minHeight: "920px" }}>
      <Nav
        getCharById={getCharById}
        getRandomChar={getRandomChar}
        deleteAllChars={deleteAllChars}
        logout={logout}
      />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <Cards to={"/home"} characters={characters} closeCard={closeCard} />
          }
        />
        <Route
          path="/home"
          element={<Cards characters={characters} closeCard={closeCard} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
