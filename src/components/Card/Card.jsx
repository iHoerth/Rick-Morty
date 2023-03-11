import React from "react";

import style from './Card.module.css'

export default function Card({character,closeCard}) {
   
   return (
      <div className={style.cardContainer}>
         <div className={style.card} style={{backgroundImage: 'url(' + character.image + ')'}}>
            <button className={style.button} onClick={() => closeCard(character.id)}>X</button>
            <div>
               <p>{character.name}</p>
               <p>ID: {character.id}</p>
            </div>

            <div>
               <p>{character.species}</p>
               <p>{character.gender}</p>
            </div>
            
         </div>
      </div>
   );
}
