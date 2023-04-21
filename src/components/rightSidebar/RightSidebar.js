import React from "react";
import styles from "./rightSidebar.module.css";
import genresData from "./genres/genresData";
import Genre from "./genres/Genre";
import favArtistData from "./favArtist/favArtistData";
import FavArtist from "./favArtist/FavArtist";
import { AiOutlinePlus } from "react-icons/ai";
import { useStateProvider } from "../../utilities/StateProvider";
// import { reducerCases } from '../../utilities/Constants'

export default function RightSidebar() {
  const [initialState] = useStateProvider();
  const { currentlyPlaying } = initialState;
  return (
    <aside className={styles.container}>
      <h2>Shortcuts</h2>
      <div className={styles.genres}>
        {genresData.map((genre, idx) => {
          return <Genre genre={genre} key={idx} />;
        })}
      </div>
      <div className={styles.favArtistsWrapper}>
        <h2>Fav Artist</h2>
        <div>
            <FavArtist/>
        </div>
      </div>
      <div className={styles.girlSection}>
        {currentlyPlaying ? (
          <img src={currentlyPlaying.image} alt="chinese girl" />
        ) : (
          <h3>No song is currently playing</h3>
        )}
        <div>
          <div>
            <span>{currentlyPlaying?.name}</span>
            <span>{currentlyPlaying?.artists} </span>
          </div>
          <div>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </aside>
  );
}
