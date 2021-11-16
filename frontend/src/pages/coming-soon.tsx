import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/CommingSoon.module.scss"

const ComingSoon = () => (
  <div className={styles.pageContent}>
    <Head>
      <title>Em breve!</title>
    {/*   <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      <link rel="shortcut icon" href="/favicon.jpg" />
    </Head>
    <div>
      <h1>Em Breve!</h1>
      <h2>
        Esta página está em desenvolvimento!
      </h2>
      <Image
        src="/coding.svg"
        alt="Em Desenvolvimento"
        width={400}
        height={300}
      />
      <span>
        Voltar Para o{" "}
        <Link href="/#">
          <a>Inicio</a>
        </Link>
        ?
      </span>
    </div>
  </div>
);

export default ComingSoon;
