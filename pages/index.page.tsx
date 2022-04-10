import type { NextPage } from "next";
import Head from "next/head";

import Hero from "./Hero";
import Notification from "./Notification";
import SupportedNetworks from "./SupportedNetworks";
import Ecosystem from "./Ecosystem";
import Technology from "./Technology";
import Benefits from "./Benefits";
import Security from "./Security";
import Investors from "./Investors";
import LatestNews from "./LatestNews";
import Comunity from "./Comunity";
import Footer from "./Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <Notification />
      <Hero />
      <SupportedNetworks />
      <Ecosystem />
      <Technology />
      <Benefits />
      <Security />
      <Investors />
      <LatestNews />
      <Comunity />
      <Footer />
    </>
  );
};

export default Home;
