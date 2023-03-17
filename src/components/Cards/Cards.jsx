import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, closeCard }) => {
  return (
    <div className={style.itemContainerWrapper}>
      <div className={style.itemContainer}>
        {characters.map((character) => (
          <Card character={character} key={character.id} closeCard={closeCard} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
