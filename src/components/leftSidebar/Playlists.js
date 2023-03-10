import React from "react";
import { useEffect } from "react";
import { useStateProvider } from "../../utilities/StateProvider";
import axious from "axios";
import { reducerCases } from "../../utilities/Constants";
import NavLinks from "./navLinks/NavLinks";
import {TbPlaylist} from 'react-icons/tb'

export default function Playlists() {
  const [initialState, dispatch] = useStateProvider();
  const { token, playlists } = initialState;
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axious.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  return (
    <div>
      {playlists.map((playlist) => {
        return <NavLinks icon={<TbPlaylist/>} text={playlist.name} key={playlist.id} />;
      })}
    </div>
  );
}
