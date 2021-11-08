import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { BsSearch } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import { SignInButton } from "../SignInButton";
import SideBar from "../SideBar";
import 'react-pro-sidebar/dist/css/styles.css';

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <button
            type="button"
            className={styles.sideBar}
            onClick={() => {
              setIsCollapsed(prev => !prev)
            }}
          >
            <FaBars color="#fff" />
          </button>
          <nav>
            <img src="/logo.jpg" alt="logo" /> 
          </nav>
          <div>
            <input  //COLOCAR A LUNETA <BsSearch>
              type="text"
              placeholder="Busque aqui"
            >      
            </input>
          </div>
          <SignInButton
            style={{ marginLeft: "auto" }}
          />
        </div>
      </header>
      <SideBar isCollapsed={isCollapsed} />
    </>
  );
}
