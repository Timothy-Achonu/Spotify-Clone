import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { TbOlympics } from "react-icons/tb";
import styles from "./login.module.css";

export default function Login() {
  const setIsLoggedIn = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1>
        <span>
          {" "}
          <TbOlympics />{" "}
        </span>
        BeeMusic
      </h1>
      <button className={styles.connect} onClick={() => setIsLoggedIn(true)}>
        connect
      </button>
    </div>
  );
}
