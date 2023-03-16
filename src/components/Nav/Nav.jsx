import React from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

const Nav = ({ getCharById, getRandomChar, deleteAllChars, logout }) => {
  return (
    <div className={styles.NavBar}>
      <NavLink className={styles.NavLinks}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/about">
          About
        </NavLink>

        <NavLink className={styles.inactive} to="/" onClick={logout}>
          Logout
        </NavLink>
      </NavLink>

      <SearchBar getCharById={getCharById} />

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => getRandomChar()}>
          GENERATE RANDOM
        </button>
        <button className={styles.button} onClick={() => deleteAllChars()}>
          DELETE ALL CHARS
        </button>
      </div>
    </div>
  );
};

export default Nav;
