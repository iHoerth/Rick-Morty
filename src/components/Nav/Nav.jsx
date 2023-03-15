import React from 'react'

import { useParams, Link, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

import styles from './Nav.module.css'



const Nav = ({getCharById,getRandomChar,deleteAllChars}) => {

  return (
    <div className={styles.NavBar}>
      <NavLink className={styles.NavLinks}>
        <Link to='/'>Login</Link>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </NavLink>
      <SearchBar getCharById={getCharById}/>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => getRandomChar()}>GENERATE RANDOM</button>
        <button className={styles.button} onClick={() => deleteAllChars()}>DELETE ALL CHARS</button>
      </div>
    </div>
  )
}

export default Nav