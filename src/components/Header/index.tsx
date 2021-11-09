import React, { useState } from 'react';
import Link from 'next/link'
import styles from "./styles.module.scss";
import { SignInButton } from "../SignInButton";
import SideBar from "../SideBar";

import { Modal } from '../Modal'
import { FaBars } from "react-icons/fa";
import 'react-pro-sidebar/dist/css/styles.css';
import { BsSearch } from 'react-icons/bs';

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div
            className={styles.sideBar}
          >
            <button
              type="button"
              onClick={() => {
                setIsCollapsed(prev => !prev)
              }}
            >
              <FaBars color="#fff" />
            </button>
          </div>
          <nav>
            <Link href="/#">
              <img src="/Logo-SFTech.png" alt="logo" />
            </Link>
          </nav>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Busque aqui seu produto"
            >
            </input>
            <BsSearch
              className={styles.searchIcon}>
              <Link href="/#"></Link>
            </BsSearch>
          </div>
          <SignInButton
            style={{ marginLeft: "auto" }}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>
      <SideBar isCollapsed={isCollapsed} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
