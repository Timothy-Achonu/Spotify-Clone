import React, { useEffect, useState } from "react";
import styles from "./center.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import fire from "../../assets/images/fire.png";
import MyPlaylist from "./myPlaylist/MyPlaylist";
import Search from "./search/Search";
import { useStateProvider } from "../../utilities/StateProvider";
import { reducerCases } from "../../utilities/Constants";
import axios from "axios";
export default function Center() {
  //213x4gsFDm04hSqIUkg88w
  const [initialState, dispatch] = useStateProvider()
  const {token, currentlyPlaying, currentAudioSrc, playerState} = initialState;
  useEffect(() => {
    getOnTopOfTheWorld();
  });
  let currentTrack;
  async function getOnTopOfTheWorld() {
    const  response  = await axios.get(
      "https://api.spotify.com/v1/tracks/213x4gsFDm04hSqIUkg88w",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let track = response.data
    currentTrack = {
      index: 0,
      id: track.id,
      name: track.name,
      artists: track.artists.map((artist) => artist.name).join(" "),
      image: track.album.images[2].url,
      duration: msTominutes(track.duration_ms),
      album: track.album.name,
      context_uri: track.album.uri,
      track_number: track.track_number,
      audio: track.preview_url,
    };
    // dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: currentTrack });
    console.log(response.data);
  }
  function msTominutes(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
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
    <main className={styles.container}>
      <div className={styles.header}>
        <div>
          <BsArrowLeft />
          <BsArrowRight />
        </div>
        <Search />
      </div>

      <div className={styles.trendingWrapper}>
        <div>
          <span> What's hot</span>
          <figure>
            {" "}
            <img src={fire} alt="fire" />{" "}
          </figure>
        </div>
        <div className={styles.trendingMoreWrapper}>
          <h2>Trending</h2>
          <div>
            {" "}
            <span> More</span>
            <span>
              {" "}
              <FiChevronRight />{" "}
            </span>{" "}
          </div>
        </div>
        <div className={styles.trendingImg}>
          <p>
            <span>Artist</span>
            <span>On Top</span>
            <span>of The World</span>
          </p>
          <div>
            <button onClick={ () => setAudioSrc(currentTrack)}>PLAY</button>
            <button>FOLLOW</button>
            <div className={styles.monthlyListeners}>
              <span>Monthly Listeners</span>
              <span>32,092</span>
            </div>
          </div>
        </div>
      </div>
      {/* MY PLAYLIST */}
      <MyPlaylist />
    </main>
  );
}
