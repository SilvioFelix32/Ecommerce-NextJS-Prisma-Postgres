import React from "react";
import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <div className={styles.container}>
      <div className="flex justify-between">
        <ul className={`flex ${styles.topLeftMenu}`}>
          <li>TODOS PRODUTOS</li>
          <li>LANÇAMENTOS</li>
          <li>DESTAQUES</li>
          <li>ELETRÔNICOS</li>
        </ul>
      </div>
    </div>
  );
};
