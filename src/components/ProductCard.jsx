import React from "react";
import styles from "./ProductCard.module.css";
import likeButton from "../images/heart.png";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className={styles.ProductCard}>
        <img src={data.image} className={styles.productImg} alt="" />
        <p className={styles.title}>{data.title}</p>
        <div className={styles.desc}>
          <p>{data.description}</p>
          <button className={styles.likebutton}>
            <img src={likeButton} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
