import React, { useEffect, useState } from "react";
import styles from "./center.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import fire from "../../assets/images/fire.png";
import MyPlaylist from "./myPlaylist/MyPlaylist";
import Search from "./search/Search";
export default function Center() {
  
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
      <MyPlaylist />
    </main>
  );
}
