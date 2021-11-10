import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <title>SfTech</title>
      </Head>
      <Component {...pageProps} />
     
    </>
  );
}

export default MyApp;
