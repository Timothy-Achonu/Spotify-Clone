import React, { useEffect } from "react";
import styles from "./favArtist.module.css";
import axios from "axios";
import { useStateProvider } from "../../../utilities/StateProvider";
import { reducerCases } from "../../../utilities/Constants";

export default function FavArtist({ favArtist }) {
  const [initialState, dispatch] = useStateProvider();
  const { token, favArtists } = initialState;
  useEffect(() => {
    getFavArtists();
  });
  async function getFavArtists() {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/artists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: reducerCases.SET_FAV_ARTISTS, favArtists: data.items });
    // console.log(data);
  }
  console.log(favArtists)
  return (
    <>
      {
        favArtists?.map((favArtist) => {
          return (
            <div className={styles.favArtist}>
              <img src={favArtist?.images[0]?.url} alt={favArtist?.name} />
              <div>
                <span> {favArtist?.name} </span>
                <span> {favArtist?.genres?.join(" ")} </span>
              </div>
              <div>..</div>
            </div>
          )
        })}
    </>
  );
}
