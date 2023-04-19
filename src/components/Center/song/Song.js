import React from "react";
import styles from "./song.module.css";
import { RxSpeakerLoud } from "react-icons/rx";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";

export default function Song({ track, idx, whoIsCalling }) {
  const [initialState, dispatch] = useStateProvider();
  const { currentAudioSrc, playerState } = initialState;
  
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
    console.log(track.playing);
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
    <>
      <div
        onClick={() => setAudioSrc(track)}
        className={`${styles.song} ${
          track.audio === currentAudioSrc && !(track.audio === null)
            ? styles.playing
            : ""
        } ${whoIsCalling === "Playlist" ? styles.Playlist : ""}`}
      >
        <div className={styles.songHash}>
          {track.audio === null && idx + 1 < 100 ? (
            "0" + (idx + 1).toString()
          ) : track.audio === null ? (
            (idx + 1).toString()
          ) : track.audio === currentAudioSrc ? (
            <RxSpeakerLoud />
          ) : idx + 1 >= 100 ? (
            (idx + 1).toString()
          ) : (
            "0" + (idx + 1).toString()
          )}
        </div>
        <div className={styles.songTitle}> {track.name} </div>
        <div className={styles.songArtist}> {track.artists} </div>
        <div className={styles.songTime}> {track.duration}</div>
        <div className={styles.songAlbum}> {track.album} </div>
      </div>
    </>
  );
}
