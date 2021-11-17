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

// animate__fadeIn
// animate__lightSpeedInRight
export function Carousel() {
  const [arrIndex, setArrIndex] = useState(0);
  const [animate, setAnimate] = useState("animate__lightSpeedInRight");

  const handleNext = useCallback(() => {
    if (arrIndex === images.length - 1) {
      setArrIndex(0);
    } else {
      setArrIndex((prevState) => prevState + 1);
      setAnimate("animate__lightSpeedInRight");
    }
  }, [arrIndex]);

  const handlePrev = () => {
    if (arrIndex === 0) {
      setArrIndex(images.length - 1);
    } else {
      setArrIndex((prevState) => prevState - 1);
      setAnimate("animate__lightSpeedInLeft");
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

        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <ul className="1">
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </ul>
            )
          );
        })}

        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <ul className="2">
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </ul>
            )
          );
        })}

        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <ul className="3">
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </ul>
            )
          );
        })}

        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <ul className="4">
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
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
