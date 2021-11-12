import React, { useState } from 'react';
import Link from 'next/link'
import styles from "./styles.module.scss";
import { SignInButton } from "../SignInButton";

import { LoginForm } from '../LoginForm'
import 'react-pro-sidebar/dist/css/styles.css';
import { BsSearch } from 'react-icons/bs';

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
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
      <LoginForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
