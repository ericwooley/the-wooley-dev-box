import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Logo from '../components/logo';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Wooley Todo List</title>
      </Head>
      <div className="app">
        <h1>The Wooley Todo List</h1>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
