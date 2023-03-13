import React from "react";
import { TbOlympics } from "react-icons/tb";
import styles from "./login.module.css";


export default function Login() {
  function handleClick() {
    //a2804cd62b9942f1822cca36028762ed ==yours
    //fe301ef56fd045d8a5e2f12ad62b81e9 ==mine
    const clientId = "fe301ef56fd045d8a5e2f12ad62b81e9";
    // const redirectUrl = "http://localhost:3000/";
    let redirectUrl = ''
    if(window.location.href.substring(window.location.href.length-1) === "#") {
       redirectUrl = window.location.href.substring(0,window.location.href.length-1);
    }
    else{
      redirectUrl = window.location.href
    }
    window.localStorage.setItem('redirectUrl', redirectUrl)
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join
      (" ")}&response_type=token&show_dialog=true`;
  };
  return (
    <div className={styles.container}>
      <h1>
        <span>
          {" "}
          <TbOlympics />{" "}
        </span>
        BeeMusic
      </h1>
      <button className={styles.connect} onClick={handleClick}>
        connect
      </button>
    </div>
  );
}
