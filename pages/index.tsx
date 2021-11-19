import Modal from '@components/Modal';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const PageWrapper = styled.main`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: url(/img/background.png) no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Geo-quiz</title>
      <meta
        name="description"
        content="Join a quiz about the countries of the world with your friends!"
      />
    </Head>
    <PageWrapper>
      <Modal
        title="Country Quiz"
        question="Kuala Lumpur is the capital of"
        image={{ src: '/img/adventure-undraw.svg' }}
      />
    </PageWrapper>
  </div>
);

export default Home;
