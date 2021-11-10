import React, { useCallback, useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart
}
  from "react-icons/ai";
import styles from "./styles.module.scss";
import notebook from '../../../public/bg-img/notebook.png'
interface notebook {
  notebook: string
}

const images = [
  {
    image: <img src={notebook} alt="Notebook1" />,
    name: "Notebook",
  },
  {
    image: <img src="./notebook2.png" alt="Notebook2"  />,
    name: "Notebook 2",
  },
  {
    image: <img src="./notebook3.png" alt="Notebook3"  />,
    name: "Notebook 3",
  },
];
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
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <>
      <div
        className={styles.carousel}>
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />

        <div className={styles.carouselSlide}>
          {images.map((ti, index) => {
            return (
              index === arrIndex && (
                <div>
                  <div className={styles.laptop}>
                    <span>{ti.image}</span>
                  </div>
                  <button><AiOutlineShoppingCart 
                    className={styles.shoppingCart} /> {ti.name}</button>
                </div>
              )
            );
          })}
        </div>
        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>

      <div
        className={styles.carouselTwo}>
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />

        <div className={styles.carouselSlide}>
          {images.map((ti, index) => {
            return (
              index === arrIndex && (
                <div>
                  <div className={styles.laptop}>
                    <span>{ti.image}</span>
                  </div>
                  <button><AiOutlineShoppingCart 
                    className={styles.shoppingCart} /> {ti.name}</button>
                </div>
              )
            );
          })}
        </div>
        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>

      <div
        className={styles.carouselThree}>
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />

        <div className={styles.carouselSlide}>
          {images.map((ti, index) => {
            return (
              index === arrIndex && (
                <div>
                  <div className={styles.laptop}>
                    <span>{ti.image}</span>
                  </div>
                  <button><AiOutlineShoppingCart 
                    className={styles.shoppingCart} /> {ti.name}</button>
                </div>
              )
            );
          })}
        </div>
        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>
    </>
  );
};
