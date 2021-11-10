import React from 'react';
import { Carousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { TopNav } from "../components/TopNav/TopNav";
import { TestiSlider } from "../components/TestiSlider/TestiSlider";

import styles from "../styles/home.module.scss";
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNav />
      <Header />
      <main className={styles.contentContainer}>
       {/*  <TestiSlider /> */}
        <Carousel />
        <img src="" alt="" />
      </main>
      <Footer />
      <BottomFooter />
    </div>
  );
}

