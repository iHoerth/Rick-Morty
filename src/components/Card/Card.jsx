import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, removeFavorites } from "../../redux/actions";

export default function Card({ character, closeCard }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (!isFav) {
      dispatch(addFavorites(character));
      setIsFav(true);
    } else {
      dispatch(removeFavorites(character));
      setIsFav(false);
    }
  };

  useEffect(() => {
    if (myFavorites.find((favorite) => favorite.id === character.id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [myFavorites, character]);

  return (
    <div className={style.cardContainer}>
      <div className={style.card} style={{ backgroundImage: "url(" + character.image + ")" }}>
        <div className={style.cardTitle}>
          <p> ID: {character.id}</p>
          <Link to={`/detail/${character.id}`} className={style.characterName}>
            {character.name}
          </Link>
          {isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>}
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
