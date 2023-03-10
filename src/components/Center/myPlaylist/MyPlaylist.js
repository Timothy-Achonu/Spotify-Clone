import React, { useEffect } from "react";
import styles from "./myPlaylist.module.css";
import songsData from "../song/songsData";
import Song from "../song/Song";
import { useStateProvider } from "../../../utilities/StateProvider";
import axious from "axios";
import audioSrc from '../../assets/audio/roar.mp3'
// import spotifySrc from 'https://open.spotify.com/track/2nwHKcQ5RG88Tf8RbLUYUA?si=4ae841aefefa4bd6'

export default function MyPlaylist() {
 

  return (
    <div>
      <div className={styles.myPlaylistsWrapper}>
        <div>
          <h2>My Playlist</h2>
          <span>Show more</span>
        </div>
        <div className={styles.table}>
          <div className={styles.rowHead}>
            <div>#</div>
            <div>TITLE</div>
            <div>ARTIST</div>
            <div>TIME</div>
            <div>ALBUM</div>
          </div>
          {songsData.map((song, idx) => {
            return <Song song={song} key={idx} id={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
