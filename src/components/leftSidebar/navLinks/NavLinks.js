import React from "react";
import styles from "./navLinks.module.css";
import { NavLink } from "react-router-dom";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";

export default function NavLinks({ icon, text, isPlayLists, setPlaylist }) {
  const [initialState, dispatch] = useStateProvider();
  function handleClick() {
    dispatch({ type: reducerCases.SET_SEARCH_KEY, searchKey: "" });
    setPlaylist();
  }
  return (
    <li>
      <NavLink
        to={`/${
          text === "Home"
            ? ""
            : isPlayLists
            ? "playlist/" + text.toLowerCase()
            : text.toLowerCase()
        }`}
        onClick={handleClick}
      >
        <div>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
}
