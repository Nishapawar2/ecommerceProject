import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./Productlist.module.css";


const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
  <>

    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
    </>
  );
};

export default Productlist;
