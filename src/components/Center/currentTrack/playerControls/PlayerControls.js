import React, { useEffect } from "react";
import styles from "./playerControls.module.css";
import { useStateProvider } from "../../../../utilities/StateProvider";
import { reducerCases } from "../../../../utilities/Constants";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

export default function PlayerControls({
  isTrackPlaying,
  audioRef,
}) {
  const [initialState, dispatch] = useStateProvider();
  const {  playerState, currentlyPlaying } = initialState;
  // console.log(audioRef)

  useEffect(() => {
    const getPlayerState = () => {
      dispatch({
          type: reducerCases.SET_PLAYER_STATE,
          playerState: currentlyPlaying ? true : false,
        });
      
    };
    getPlayerState();
  }, [ playerState, currentlyPlaying]);

  const changeTrack =  () => {
    if (isTrackPlaying) {
    }
  };
  const changeState = () => {
    // playerState ? audioRef.current.pause() : audioRef.current.play()
    audioRef.current.pause()
    console.log(audioRef.current)
    console.log(playerState)
    if (isTrackPlaying) {
      // dispatch({
      //   type: reducerCases.SET_PLAYER_STATE,
      //   playerState: !playerState,
      // });
    }
  };

  return (
    <div className={styles.playerControls}>
      <div>
        <div className={styles.shuffle}>
          <BsShuffle />
        </div>
        <div className={styles.prev}>
          <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
        </div>
        <div className={styles.play}>
          {playerState ? (
            <BsFillPauseCircleFill onClick={changeState} />
          ) : (
            <BsFillPlayCircleFill onClick={changeState} />
          )}
        </div>
        <div className={styles.next}>
          <CgPlayTrackNext onClick={() => changeTrack("next")} />
        </div>
        <div className={styles.repeat}>
          <FiRepeat />
        </div>
      </div>
    </div>
  );
}
