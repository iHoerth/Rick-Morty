import React from 'react';
import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({getCharById}) {
   const [searchValue,setSearchValue] = useState('');

   const handleSearch = (e) => {
      setSearchValue(e.target.value)
   }

   return (
      <div className={style.container} style={{boder:'3px solid black'}}>
         <input type='search' className={style.formControl} onChange={(e) => handleSearch(e)} />
         <button className={style.button} onClick={() => getCharById(searchValue)}>Agregar</button>
      </div>
   );
}
