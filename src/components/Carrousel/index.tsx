import React, { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./styles.module.scss"

const images = [
  {
    image: <img src="https://i.imgur.com/hLNO2Hb.jpg" />,
    name: "Notebook",
  },
  {
    image: <img src="https://i.imgur.com/VyMbRyx.jpg" />,
    name: "Notebook",
  },
  {
    image: <img src="https://i.imgur.com/hn9sZkY.jpg" />,
    name: "Notebook",
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
    <div
      className={styles.carousel}>
      < AiOutlineArrowLeft
        className={styles.handleprev}
        onClick={handlePrev} />

      <div className="carouselslide">
        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                <div className="notebook">
                  <span>{ti.image}</span>
                </div>
                <span>{ti.name}</span>
              </div>
            )
          );
        })}
      </div>
      <AiOutlineArrowRight
        className={styles.handlenext}
        onClick={handleNext} />
    </div>
  );
};
