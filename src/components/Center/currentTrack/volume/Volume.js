import React from "react";
import styles from "./volume.module.css";
import { RxSpeakerQuiet } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";
import { useStateProvider } from "../../../../utilities/StateProvider";


export default function Volume({audioRef}) {
  const [initialState] = useStateProvider()
  const {currentlyPlaying} = initialState


  const setVolume =  (e) => {
    let volume = (Number(e.target.value)/100).toFixed(1)
    if(currentlyPlaying) {
      audioRef.current.volume = volume
    }
  };
  return (
    <div className={styles.audioRange}>
      <figure>
        <RxSpeakerQuiet />
      </figure>
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
      <figure>
        <RxSpeakerLoud />
      </figure>
    </div>
  );
}
