import Head from "next/head";
import { AppProps } from "next/app";
import { Header } from "../components/Header";

import "../styles/global.scss";
import React from "react";
import { SideBar } from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SfTech</title>
      </Head>
      <Header />
      <SideBar></SideBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
