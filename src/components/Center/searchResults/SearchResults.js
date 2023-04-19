import React from "react";
import Search from "../search/Search";
import styles from "./searchResults.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";

export default function SearchResults() {
  const [initialState, dispatch] = useStateProvider();
  const { searchResults, currentAudioSrc, playerState } = initialState;

  function checkPlayerState(audioSrc) {
    if (currentAudioSrc !== audioSrc) {
      return true;
    } else if (currentAudioSrc === audioSrc && playerState) {
      return false;
    } else if (currentAudioSrc === audioSrc && !playerState) {
      return true;
    }
  }
  function setAudioSrc(track) {
    console.log( 'In setAudio', track);
    if (track.audio) {
      dispatch({
        type: reducerCases.SET_CURRENT_AUDIO_SRC,
        currentAudioSrc: track.audio,
      });
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: checkPlayerState(track.audio),
      });
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: track });
    } else {
      alert(`No audio is available for ${track.name}`);
    }
  }



  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <BsArrowLeft />
          <BsArrowRight />
        </div>
        <Search />
      </div>
      {searchResults.tracks[0] && (
        <div className={styles.displayTracks} >
          <div className={styles.topResult} onClick={()=>setAudioSrc(searchResults.tracks[0]) }>
            <img src={searchResults.tracks[0]?.image} alt="track" />
            <div> {searchResults.tracks[0]?.name} </div>
            <div> {searchResults.tracks[0]?.artists} </div>
          </div>
          <div>
            {searchResults.tracks.map((track) => {
              return (
                <div onClick={()=>setAudioSrc(track)} key={track.id}>
                  <img src={track?.image} alt="track" />
                  <div className={styles.trackNameArtistWrapper}>
                    <span> {track?.name} </span>
                    <span> {track?.artists} </span>
                  </div>
                  <div className={styles.duration}> {track?.duration} </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
