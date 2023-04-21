import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";
import { useRef } from "react";

export default function Search() {
  const [initialState, dispatch] = useStateProvider();
  const { token, searchKey, searchResults } = initialState;

  const InputRef = useRef(null);

  async function searchTrack(key, type) {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: key,
        type: type,
        // type: ["track", "artist", "album", "playlist"],
      },
    });
    // console.log(data);
    if (type === "track") {
      const response = data.tracks.items.map((track, index) => {
        return {
          index: index,
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
      });
      const newSearchResults = {
        ...searchResults,
        tracks: response,
      };
      dispatch({
        type: reducerCases.SET_SEARCH_RESULTS,
        searchResults: newSearchResults,
      });
    }
  }
  function msTominutes(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  function handleSearch(e) {
    dispatch({ type: reducerCases.SET_SEARCH_KEY, searchKey: e.target.value });

    if (e.target.value) {
      searchTrack(e.target.value, "track");
      searchTrack(e.target.value, "artist");
      searchTrack(e.target.value, "album");
      searchTrack(e.target.value, "playlist");
      searchTrack(e.target.value, "show");
    }
  }
  let navigate = useNavigate();
  useEffect(() => {
    if (searchKey) {
      navigate("/search");
      InputRef.current.focus();
    }
  }, [searchKey]);

  return (
    <div className={styles.inputWrapper}>
      <CiSearch />
      <input
        type="text"
        placeholder="Search for artists, songs and..."
        value={searchKey}
        onChange={(e) => handleSearch(e)}
        ref={InputRef}
      />
    </div>
  );
}
