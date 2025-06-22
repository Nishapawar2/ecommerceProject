import React from "react";
import Sidebar from "./Sidebar";
import Productlist from "./Productlist";
import styles from "./Main.module.css";
import arrowLeft from "../images/arrow-left.png";
import { useState } from "react";
import arrowDown from "../images/arrow-down.png";

const Main = () => {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <>
    <div style={{display:"flex"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25%",
          paddingLeft: "20px",
        }}
      >
        <h5 style={{ paddingLeft: "30px" }}>3425 Items</h5>
        <button
          className={styles.filterButton}
          onClick={() => setShowFilter(!showFilter)}
        >
          {" "}
          <img
            src={arrowLeft}
            alt="album"
            loading="lazy"
            className={styles.arrowLeft}
          />
          {showFilter ? "Hide Filter" : "Show Filter"}
        </button>
      </div>
      <div style={{ display:"flex",justifyContent:"flex-end",width:"75%" }}>
        <h5>RECOMMENDED</h5>
        <button className={styles.filterButton}>
          {" "}
          <img
            src={arrowDown}
            alt="arrowdown"
            loading="lazy"
            className={styles.arrowLeft}
          />
        </button>
      </div>
      </div>
      <div className={styles.main}>
        {showFilter && (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        )}
        {/* <div className={styles.products}> */}
          <main style={{padding: "1rem", flex: "1" }}>
            <Productlist />
          </main>
        {/* </div> */}
      </div>
    </>
  );
};

export default Main;
