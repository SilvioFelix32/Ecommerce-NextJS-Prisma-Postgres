import React, { useCallback, useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart
}
  from "react-icons/ai";
import Image from 'next/image';
import Link from "next/link";

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
];

const images2 = [
  {
    image: <Image src="/teclado1.png" alt="Teclado 1" width="220" height="220" />,
    name: "Teclado 1",
  },
  {
    image: <Image src="/teclado2.png" alt="Teclado 2" width="220" height="220" />,
    name: "Teclado 2",
  },
  {
    image: <Image src="/processador1.png" alt="Processador" width="220" height="220" />,
    name: "Processador",
  },
]

const images3 = [
  {
    image: <Image src="/roteador.png" alt="Roteador" width="220" height="220" />,
    name: "Roteador",
  },
  {
    image: <Image src="/roteador_2.png" alt="Roteador 2" width="220" height="220" />,
    name: "Roteador 2",
  },
  {
    image: <Image src="/processador1.png" alt="Processador" width="220" height="220" />,
    name: "Processador",
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
    }, 10000000);
    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <>
      <div
        className={styles.carousel}>
        {images.map((ti, index) => {
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images2.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>

      <div
        className={styles.carouselTwo}>
        < AiOutlineArrowLeft
          className={styles.handleprev}
          onClick={handlePrev} />
        {images.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images2.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })}

        {images3.map((ti, index) => {
          return (
            index === arrIndex && (
              <div>
                {ti.image}
                <button><AiOutlineShoppingCart
                  className={styles.shoppingCart} />{ti.name}</button>
              </div>
            )
          );
        })};

        <AiOutlineArrowRight
          className={styles.handleNext}
          onClick={handleNext} />
      </div>
    </>
  );
};
