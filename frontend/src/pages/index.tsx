import React, { useState } from 'react';
import { Carousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { TopNav } from "../components/TopNav";
import { Footer } from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

import styles from "../styles/Home.module.scss";
import SideBar from '../components/SideBar';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div>
      <TopNav />
      <Header />
      <div className={styles.content}>
        <SideBar isCollapsed={isCollapsed} />
        <div className={styles.carousel}>
          <div className={styles.header}>
            <h1>Seja bem vindo!</h1> 
            <h2>Conheça nossos produtos:</h2>
          </div>
          <Carousel />
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
}

