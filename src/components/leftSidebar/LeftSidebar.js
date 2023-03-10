import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { TbOlympics } from "react-icons/tb";
import styles from "./leftSidebar.module.css";
import NavLinks from "./navLinks/NavLinks";
import navlinksData from "./navLinks/data";
import { FiChevronRight } from "react-icons/fi";
import ImgSrc from "../assets/images/Ellipse.png";

export default function LeftSidebar() {
  console.log(navlinksData.length);
  const Linkstyles = {
    color: "#9f9ea1",
    backgroundColor: "white",
    fontSize: "2rem",
  };

  return (
    <aside className={styles.container}>
      <div className={styles.topMenuIcon}>
        <MdMenuOpen style={Linkstyles} />
      </div>
      <div className={styles.BeeMusicWrapper}>
        <span className={styles.icon}>
          <TbOlympics />
        </span>
        <span>
          <span>Bee</span>
          <span>Music</span>
        </span>
      </div>
      <ul>
        {navlinksData.slice(0, 3).map((item, idx) => {
          return <NavLinks icon={item.icon} text={item.text} key={idx} />;
        })}
      </ul>
      <div className={styles.listsHeading}> Discover</div>
      <ul>
        {navlinksData.slice(3, 6).map((item, idx) => {
          return <NavLinks icon={item.icon} text={item.text} key={idx} />;
        })}
      </ul>
      <div className={styles.listsHeading}> Your Collection </div>
      <ul>
        {navlinksData.slice(6).map((item, idx) => {
          return <NavLinks icon={item.icon} text={item.text} key={idx} />;
        })}
      </ul>
      <div className={styles.ceptariWrapper}>
        <div className={styles.nameImgWrapper}>
          <figure>
            <img src={ImgSrc} alt="lady face" />
          </figure>
          <span>Captari Tyas</span>
        </div>
        <div>
          <FiChevronRight />
        </div>
      </div>
    </aside>
  );
}
