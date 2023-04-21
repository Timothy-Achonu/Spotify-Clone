import React, { useCallback, useEffect } from "react";
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

export default function PlayerControls({ audioRef }) {
  const [initialState, dispatch] = useStateProvider();
  const { playerState, currentlyPlaying, currentAudioSrc, selectedPlaylist } =
    initialState;
  // const audioRef = useRef(null);
  //

  const changeState = () => {
    if (currentlyPlaying) {
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: !playerState,
      });
    } else {
      alert("To play music, click on a song");
    }
  };

  const changePlayerState = () => {
    if (currentlyPlaying) {
      if (playerState) {
        audioRef.current.play();
      }
      if (!playerState) {
        audioRef.current.pause();
      }
    }
  };
  useEffect(() => {
    changePlayerState();
  }, [playerState, currentAudioSrc]);

  const changeTrack = (type) => {
    
    if (type === "next") {

      if (currentlyPlaying.index + 1 > selectedPlaylist.tracks.length - 1) {
        if(!selectedPlaylist.tracks[0].audio) {
          alert(`The audio for ${selectedPlaylist.tracks[0].name} is not available`)
          return
        }
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc: selectedPlaylist.tracks[0].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying: selectedPlaylist.tracks[0],
        });
      } else {
        if( !selectedPlaylist.tracks[currentlyPlaying.index + 1].audio) {
          alert(`The audio for ${selectedPlaylist.tracks[currentlyPlaying.index + 1].name} is not available`)
          return
        }
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc:
            selectedPlaylist.tracks[currentlyPlaying.index + 1].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying: selectedPlaylist.tracks[currentlyPlaying.index + 1],
        });
      }
    }
    if (type === "prev") {
      if (currentlyPlaying.index - 1 < 0) {
        if( !selectedPlaylist.tracks[selectedPlaylist.tracks.length - 1].audio) {
          alert(`The audio for ${ selectedPlaylist.tracks[selectedPlaylist.tracks.length - 1].name} is not available`)
          return
        }
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc:
            selectedPlaylist.tracks[selectedPlaylist.tracks.length - 1].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying:
            selectedPlaylist.tracks[selectedPlaylist.tracks.length - 1],
        });
      } else {
        if(!selectedPlaylist.tracks[currentlyPlaying.index - 1].audio) {
          alert(`The audio for ${selectedPlaylist.tracks[currentlyPlaying.index - 1].name} is not available`)
          return
        }
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc:
            selectedPlaylist.tracks[currentlyPlaying.index - 1].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying: selectedPlaylist.tracks[currentlyPlaying.index - 1],
        });
      }
    }
  };
  //HANDLE AUDIO ENDED.
  const handleEnded = () => {
    if (currentlyPlaying.index + 1 > selectedPlaylist.tracks.length - 1) {
      let track = selectedPlaylist.tracks[0];
      if (selectedPlaylist.tracks[0].audio) {
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc: selectedPlaylist.tracks[0].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying: selectedPlaylist.tracks[0],
        });
      } else {
        alert(`The audio of ${track.name} is not available`);
        changeState()
      }
    } else {
      let track = selectedPlaylist.tracks[currentlyPlaying.index + 1]
      if (selectedPlaylist.tracks[currentlyPlaying.index + 1].audio) {
        dispatch({
          type: reducerCases.SET_CURRENT_AUDIO_SRC,
          currentAudioSrc:
            selectedPlaylist.tracks[currentlyPlaying.index + 1].audio,
        });
        dispatch({
          type: reducerCases.SET_PLAYING,
          currentlyPlaying: selectedPlaylist.tracks[currentlyPlaying.index + 1],
        });
      } else {
        alert(`The audio of ${track.name} is not available`);
        changeState()
      }
    }
  };
  //setting volume to 50% on first page loading
  useEffect(() => {
    // console.log('In volume useEffect', audioRef.current.volume);
    audioRef.current.volume = 0.5;
  },[])
  return (
    <div className={styles.playerControls}>
      <div>
        <div className={styles.shuffle}>
          <BsShuffle />
        </div>
        <div className={styles.prev}>
          <CgPlayTrackPrev onClick={() => changeTrack("prev")} />
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
      <audio src={currentAudioSrc} ref={audioRef} onEnded={handleEnded} ></audio>
    </div>
  );
}
