import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, closeCard }) => {
  return (
    <div className={style.itemContainerWrapper}>
      <div className={style.itemContainer}>
        {characters.map((character, i) => (
          <Card character={character} key={i} closeCard={closeCard} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
