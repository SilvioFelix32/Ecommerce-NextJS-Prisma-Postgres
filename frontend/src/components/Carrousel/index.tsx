import React, { useCallback, useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart
}
  from "react-icons/ai";
import Image from 'next/image';

import styles from "./styles.module.scss";

const images = [
  {
    image: <Image src="/notebook.png" alt="Notebook 1" width="220" height="220" />,
    name: "Notebook",
  },
  {
    image: <Image src="/notebook2.png" alt="Notebook 2" width="220" height="220" />,
    name: "Notebook 2",
  },
  {
    image: <Image src="/notebook3.png" alt="Notebook 3" width="220" height="220" />,
    name: "Notebook 3",
  },
]

export function Carousel() {
  const [productsArray, SetProductsArray] = useState(0);

  const handleNext = useCallback(() => {
    if (productsArray === images.length - 1) {
      SetProductsArray(0);
    } else {
      SetProductsArray((prevState) => prevState + 1);
    }
  }, [productsArray]);

  const handlePrev = () => {
    if (productsArray === 0) {
      SetProductsArray(images.length - 1);
    } else {
      SetProductsArray((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      <div
        className={styles.carousel}>
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />

        {images.map((product, products) => {
          return (
            products === productsArray && (
              <ul
                key={Math.random()}
                className="1">
                {product.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{product.name}</button>
              </ul>
            )
          );
        })}

        {images.map((product, products) => {
          return (
            products === productsArray && (
              <ul
                key={Math.random()}
                className="2">
                {product.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{product.name}</button>
              </ul>
            )
          );
        })}

        {images.map((product, products) => {
          return (
            products === productsArray && (
              <ul
                key={Math.random()}
                className="3">
                {product.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{product.name}</button>
              </ul>
            )
          );
        })}

        {images.map((product, products) => {
          return (
            products === productsArray && (
              <ul
                key={Math.random()}
                className="4">
                {product.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{product.name}</button>
              </ul>
            )
          );
        })}

        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>
    </>
  );
};
