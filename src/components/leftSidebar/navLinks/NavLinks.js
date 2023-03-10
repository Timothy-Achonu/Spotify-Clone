import React from "react";
import styles from "./navLinks.module.css";
import { NavLink } from "react-router-dom";

export default function NavLinks({ icon, text }) {
  function callActive(active) {
    console.log(active)
  }
  return (
    <li className={`${text === "Home" ? styles.home : ""}`}>
      <NavLink to={`/${text === "Home" ? "" : text.toLowerCase()}`}>
        <div>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
}
