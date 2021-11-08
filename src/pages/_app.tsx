import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import faviconLogo from '../../public/favicon.jpg'

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="favicon.jpg" ></link>     {/* ADICIONAR O FAVICON */}
        <title>SfTech</title>
      </Head>
      <Component {...pageProps} />
     
    </>
  );
}

export default MyApp;
