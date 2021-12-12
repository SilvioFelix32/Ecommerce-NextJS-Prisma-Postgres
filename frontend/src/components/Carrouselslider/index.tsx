import React from "react";
import Image from 'next/image';
import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss'

export function CarouselSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.carousel}>
      <Carousel
        centerMode={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={100}
        keyBoardControl={true}
        transitionDuration={5}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div><Image src="/notebook.png" alt="Notebook 1" width="220" height="220" /></div>
        <div><Image src="/notebook2.png" alt="Notebook 2" width="220" height="220" /></div>
        <div><Image src="/notebook3.png" alt="Notebook 3" width="220" height="220" /></div>
        <div><Image src="/notebook2.png" alt="Notebook 2" width="220" height="220" /></div>
      </Carousel>
    </div>
  );
};
