import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from 'components/templates/HomePage';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Wine</title>
      <meta name="description" content="Loja de vinhos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage />
  </div>
);

export default Home;
