import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";
import logo from "../images/Logo.png";
import nav1 from "../images/search-normal.png";
import nav2 from "../images/heart.png";
import nav3 from "../images/shopping-bag.png";
import nav4 from "../images/profile.png";
import nav5 from "../images/Language.png";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.logo}>LOGO</div>
        <ul>
          <li>
            <img src={nav1} alt="" />
          </li>
          <li>
            <img src={nav2} alt="" />
          </li>
          <li>
            <img src={nav3} alt="" />
          </li>
          <li>
            <img src={nav4} alt="" />
          </li>
          <li>
            <img src={nav5} alt="" />
          </li>
        </ul>
      </div>

      <br />
      <Navbar />
    </>
  );
};

export default Header;
