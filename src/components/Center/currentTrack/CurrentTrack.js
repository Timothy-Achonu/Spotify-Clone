import  { useEffect } from "react";
import styles from "./currentTrack.module.css";
import axios from "axios";
import { useStateProvider } from "../../../utilities/StateProvider";
import PlayerControls from "./playerControls/PlayerControls";
// import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Volume from "./volume/Volume";
import { useRef } from "react";


export default function CurrentTrack() {
  const [initialState] = useStateProvider();
  const {  currentlyPlaying } = initialState;
  const audioRef = useRef(null);

  
  return (
    <div>
      {currentlyPlaying ? (
        <div className={styles.currentlyPlaying}>
          <div>
            <div className={styles.songArtistsWrapper}>
              <div>
                <span> {currentlyPlaying.name} </span>
                <span> {currentlyPlaying.artists.join(" ")} </span>
              </div>
              <figure>
                <MdFavoriteBorder />
              </figure>
            </div>
            <PlayerControls
              audioRef={audioRef}
            />
            <Volume audioRef={audioRef} />
          </div>
        </div>
      ) : (
        <div className={styles.currentlyPlaying}>
          <div>
            <div className={styles.songArtistsWrapper}>
              <div>
                <span> No track </span>
                <span> is playing </span>
              </div>
              <figure>
                <MdFavoriteBorder />
              </figure>
            </div>
            <PlayerControls
              audioRef={audioRef}
            />
            <Volume  />
          </div>
        </div>
      )}
    </div>
  );
}
