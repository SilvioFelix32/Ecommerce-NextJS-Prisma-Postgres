import React from 'react';
import styles from "./styles.module.scss";

export function Footer() { 
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <h4 className={styles.footerHead}>Empresa</h4>
          <div className={styles.column}>
            <a href="example">Sobre</a><br/>
            <a href="example">Contatos</a><br/>
            <a href="example">Loja Fisica</a><br/>
          </div>
        </div>
        <div>
          <h4 className={styles.footerHead}>Ajuda</h4>
          <div className={styles.column}>
            <a href="example">Como comprar</a><br/>
            <a href="example">FAQs</a><br/>
            <a href="example">Politica de Privacidade</a><br/>
            <a href="example">Termos & Condições</a><br/>
          </div>
        </div>
        <div>
          <h4 className={styles.footerHead}>Loja</h4>
          <div className={styles.column}>
            <a href="example">Navegação</a><br/>
            <a href="example">Navegação</a><br/>
            <a href="example">Navegação</a><br/>
          </div>
        </div>
        <div>
          <h4 className={styles.footerHead}>Contato</h4>
          <div className={styles.column}>
            <span>
              Whatsapp 28 9999-0000, <br />
              Instagran SFTech.com, <br />
              Linkedin SilvioFelix32
            </span>
          </div>
            <span>
              Aberto todos os dias<br/>
              9:00 AM ~ 11:00 PM
            </span>
        </div>
      </div>
    </>
  );
}
