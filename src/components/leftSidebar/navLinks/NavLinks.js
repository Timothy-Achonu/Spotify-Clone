import React from "react";
import styles from "./navLinks.module.css";
import { NavLink } from "react-router-dom";

export default function NavLinks({ icon, text }) {
  
  return (
    <li >
      <NavLink to={`/${text === "Home" ? "" : text.toLowerCase()}`}>
        <div>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
}
