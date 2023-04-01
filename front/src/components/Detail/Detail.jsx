import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();

  useEffect(() => {
    console.log("MONTADO CRACK");
    fetch(`http://localhost:3001/rickandmorty/onsearch/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    setLoading(false);
    console.log(character);
    return setCharacter({});
  }, [detailId]);

  if (loading) {
    return <div style={{ fontSize: "40px", color: "white" }}>L O A D I N G . . . </div>;
  }

  return (
    <div className={style.detailWrapper}>
      <div className={style.detailContainer}>
        <div className={style.detailTitle}>
          <p> ID: {character.id}</p>
          <p>{character.name}</p>
        </div>
        <img style={{ width: "80%", maxWidth: "600px", justifySelf: "flex-end" }} src={character.image} alt=""></img>

        <div className={style.detailFooter}>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
