import Head from 'next/head';
import HomePage from 'components/templates/HomePage';
import { useContext } from 'react';
import context from 'context/context';
import { ApiResponse } from 'types';

const Home = ({ response }: { response: ApiResponse }) => {
  const { setResponse } = useContext(context);
  setResponse(response);
  return (
    <div>
      <Head>
        <title>Wine</title>
        <meta name="description" content="Loja de vinhos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9').then((res) => res.json());
  return { props: { response } };
}

export default Home;
