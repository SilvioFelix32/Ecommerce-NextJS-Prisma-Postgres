import React, { useState } from 'react';
import { Carousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import SideBar from '../components/SideBar';
import BottomFooter from '../components/BottomFooter';

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SideBar isCollapsed={isCollapsed} />
        <div className={styles.content}>
          <NavBar />
          <h1>Seja bem vindo!</h1>
          <h2>Conheça os nossos produtos:</h2>
          <Carousel />
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
}

