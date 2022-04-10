import type { NextPage } from "next";
import Head from "next/head";

import Hero from "./Hero";
import Notification from "./Notification";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>

      <Notification />
      <Hero />
    </>
  );
};

export default Home;
