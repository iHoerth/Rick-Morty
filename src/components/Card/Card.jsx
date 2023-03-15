import React from "react";
import {Link} from 'react-router-dom'
import style from './Card.module.css'

export default function Card({character,closeCard}) {
   
   return (
      <div className={style.cardContainer}>
         <div className={style.card} style={{backgroundImage: 'url(' + character.image + ')'}}>
            <button className={style.button} onClick={() => closeCard(character.id)}>X</button>
            <div>
               <Link to={`/detail/${character.id}`}>
                <p>{character.name}</p>
               </Link>
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
