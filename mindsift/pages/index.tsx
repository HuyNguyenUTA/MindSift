import Head from 'next/head';
import React from 'react';
import { Inter } from 'next/font/google';
import { Style } from 'util';

const inter = Inter({ subsets: ['latin'] });

const styles = {
  background: {
    height: '100%'
  },
  inputBox: {
    display: 'flex',
    width: '50px',
    height: '100%',
    backgroundColor: '#777777'
  }
}

interface HomeProps {
  styles: typeof styles; // declare the type of styles prop
}

const Home: React.FC<HomeProps> = ({styles}) => {
  return (
    <>
      <Head>
        <title>MindSift</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <body>
          <div style={styles.inputBox}>
          </div>
        </body>
      </main>
    </>
  );
}

export default Home;