import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ character, closeCard }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.card} style={{ backgroundImage: "url(" + character.image + ")" }}>
        <div className={style.cardTitle}>
          <p> ID: {character.id}</p>
          <Link to={`/detail/${character.id}`} className={style.characterName}>
            {character.name}
          </Link>
          <div className={style.button} onClick={() => closeCard(character.id)}>
            X
          </div>
        </div>

        <div className={style.cardFooter}>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        </div>
      </div>
    </div>
  );
}
