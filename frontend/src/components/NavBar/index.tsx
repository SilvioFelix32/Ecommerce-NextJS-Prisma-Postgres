import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navBar}>
        <li>
          <Link href="/coming-soon">
            TODOS OS PRODUTOS
          </Link>
        </li>
        <li>
          <Link href="/coming-soon">
            LANÇAMENTOS
          </Link>
        </li>
        <li>
          <Link href="/coming-soon">
            DESTAQUES
          </Link>
        </li>
        <li>
          <Link href="/coming-soon">
            ELETRÔNICOS
          </Link>
        </li>
      </ul>
    </div>
  );
};
