import React, {useState} from "react";
import styles from "./song.module.css";
import { RxSpeakerLoud } from "react-icons/rx";
import usePlayTrack from "../../customHooks/usePlayTrack";
import { useRef } from "react";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";
import CurrentTrack from "../currentTrack/CurrentTrack";


export default function Song({ track, idx, whoIsCalling}) {
 const [initialState, dispatch] = useStateProvider()
 const [playState, setPlayState] = useState(false)
  const audioRef = useRef(null)
  function handleClick() {
    console.log(audioRef.current.paused)
    console.log(window.location.href)
    playTrack()
  }
  function playTrack() {
   playState ? audioRef.current.pause() : audioRef.current.play()
   setPlayState(prev => !prev)
    dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying:track})
  }
  // console.log(track)
  return (
    <> 
    <div
    onClick={handleClick }
      className={`${styles.song} ${track.playing ? styles.playing : ""} ${
        whoIsCalling === "Playlist" ? styles.Playlist : ""
      }`}
    >
      <div className={styles.songHash} onClick={()=> audioRef.current.pause()}>
        {track.playing ? <RxSpeakerLoud /> : "0" + (idx + 1).toString()}
      </div>
      <div className={styles.songTitle}> {track.name} </div>
      <div className={styles.songArtist}> {track.artists.join(' ')} </div>
      <div className={styles.songTime}> {track.duration}</div>
      <div className={styles.songAlbum}> {track.album} <audio controls src={track.audio} ref={audioRef}></audio> </div>
    </div>
    <CurrentTrack audioRef={audioRef}/>
    </>
    
  );
}
