import React from "react";
import styles from "./center.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import fire from "../assets/images/fire.png";
import songsData from './song/songsData'
import Song from "./song/Song";

export default function Center() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div>
          <BsArrowLeft />
          <BsArrowRight />
        </div>
        <div className={styles.inputWrapper}>
          <CiSearch />
          <input type="text" placeholder="Search for artists, songs and..." />
        </div>
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
            <button>PLAY</button>
            <button>FOLLOW</button>
            <div className={styles.monthlyListeners}>
              <span>Monthly Listeners</span>
              <span>32,092</span>
            </div>
          </div>
        </div>
      </div>
      {/* MY PLAYLIST */}
      <div className={styles.myPlaylistsWrapper}>
        <div>
          <h2>My Playlist</h2>
          <span>Show more</span>
        </div>
        <div className={styles.table}>
          <div className={styles.rowHead}>
            <div >#</div>
            <div>TITLE</div>
            <div>ARTIST</div>
            <div>TIME</div>
            <div>ALBUM</div>
          </div>
          {
            songsData.map((song, idx) => {
               return (
                <Song song={song} key={idx} id={idx} />
               )
            })
          }
        </div>
      </div>
    </main>
  );
}
