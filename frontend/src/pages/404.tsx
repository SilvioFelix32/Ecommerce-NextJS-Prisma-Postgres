import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/404.module.scss"

const Custom404 = () => (
  <>
  <div className={styles.pageContent}>
    <Head>
      <title>Página não encontrada!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.jpg" />
      <title>SfTech</title>
    </Head>
    <div>
      <h1>Oops! Página não encontrada!</h1>
      <Image className={styles.image}
        src="/404.svg"
        alt="404 Page não Encontrada"
        width={400}
        height={300}
      />
      <span className="">
        Voltar Para o{" "}
        <Link href="/#">
          <a className="">Inicio</a>
        </Link>
        ?
      </span>
    </div>
    </div>
  </>
);

export default Custom404;
