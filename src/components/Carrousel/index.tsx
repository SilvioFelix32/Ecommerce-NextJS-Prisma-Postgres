import React from 'react';
import styles from "./styles.module.scss"

import notebook from "../../../public/bg-img/notebook.jpg"

export function Carousel() {
    return (
        <>
         <div className={styles.carouselContainer}>
          <h2>Empresa</h2>
          <div className={styles.carrouselContent}>
            <a href="example">Sobre</a>
            <a href="example">Contatos</a>
            <a href="example">Loja Fisica</a>
          </div>
        </div>
        </>
    )
}
