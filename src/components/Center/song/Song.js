import React from 'react'
import styles from './song.module.css';
import { RxSpeakerLoud } from "react-icons/rx";

export default function Song({song, id}) {
  return (
    <div className={`${styles.song} ${song.playing ? styles.playing : ''}`}>
       <div className={styles.songHash}>{  song.playing? <RxSpeakerLoud/> : "0" + (id + 1).toString()}</div>
       <div className={styles.songTitle}> {song.title} </div>
       <div className={styles.songArtist}> {song.artist} </div>
       <div className={styles.songTime}> {song.time}</div>
       <div className={styles.songAlbum}> {song.album}</div>
    </div>
  )
}
