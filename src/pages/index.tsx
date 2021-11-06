import global from '../styles/global.scss'
import { GetStaticProps } from "next";
import Head from "next/head";
import React from 'react';
import { Header } from '../components/Header';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | SfTech</title>
      </Head>
      <Header />
    </>
  );
}

