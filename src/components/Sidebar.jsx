import React from "react";
import styles from "./Sidebar.module.css";
import arrowDown from "../images/arrow-down.png";

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
    <div className="filter">
      <p
        style={{
          color: "#252020",
          fontSize: "18px",
          display: "flex",
          justifyContent: "left",
          borderBottom:"1px solid #E5E5E5",
          paddingBottom:"10px"
        }}
      >
        CUSTOMIZABLE
      </p>

      <div className={styles.submenu}>
        <p className={styles.title}>IDEAL FOR   
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>occasion   
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>work  
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>fabric 
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>segment
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>suitable for  
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>raw materials 
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>

      <div className={styles.submenu}>
        <p className={styles.title}>Pattern   
          <img
            src={arrowDown}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          /></p>
        <p className={styles.Subtitle}>ALL</p>
      </div>
      </div>
 
    </div>
  );
};

export default Sidebar;
