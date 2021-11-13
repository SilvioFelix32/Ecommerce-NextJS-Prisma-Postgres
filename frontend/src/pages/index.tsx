import React, { useState } from 'react';
import { Carousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { TopNav } from "../components/TopNav/TopNav";
import { Footer } from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

import styles from "../styles/home.module.scss";
import SideBar from '../components/SideBar';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className={styles.container}>
      <TopNav />
      <Header />
      <SideBar isCollapsed={isCollapsed} />
      <main className={styles.contentContainer}>
        <Carousel />
        <img src="" alt="" />
      </main>
      <Footer />
      <BottomFooter />
    </div>
  );
}

