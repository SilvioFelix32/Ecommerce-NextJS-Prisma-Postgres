import React from "react";
import styles from "./styles.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function TopNav() {
  return (
    <div className={styles.container}>
      <div className="flex justify-between">
        <ul className={`flex ${styles.topLeftMenu}`}>
          <li>
            <BsLinkedin />
            <a href="https://github.com/SilvioFelix32"> GitHub</a>
          </li>
          <li>
            <BsGithub />
            <a href="https://www.linkedin.com/in/silviofelix32/"> Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
