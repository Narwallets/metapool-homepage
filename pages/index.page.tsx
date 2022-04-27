import type { NextPage } from "next";
import Head from "next/head";
import api from "../api";
import { Container, Image, keyframes } from "@chakra-ui/react";
import Header from "./Home/Header";
import Hero from "./Home/Hero";
import StakingFarms from "./Home/StakingFarms";
import useSmoothScrollTo from "../hooks/useSmoothScrollTo";
import Benefits from "./Home/Benefits";
import Comunity from "./Home/Comunity";
import Ecosystem from "./Home/Ecosystem";
import Footer from "./Home/Footer";
import HowItWorks from "./Home/HowItWorks";
import Investors from "./Home/Investors";
import LatestNews from "./Home/LatestNews";
import Security from "./Home/Security";
import Technology from "./Home/Technology";

interface Props {
  metrics: {
    tvl: string;
    staked_pools_count: string;
    st_near_30_day_apy: string;
  };
}

const App: NextPage<Props> = ({ metrics }) => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <Container
        position="relative"
        maxW="container.100"
        p={0}
        overflow="clip"
        maxWidth="100vw"
      >
        <Image
          alt="background"
          src="bg-home-main.svg"
          position="absolute"
          top={{ base: "0%" }}
          left={{ base: "0%" }}
          marginLeft={{ base: "0px" }}
          marginTop={{ base: "0px" }}
          maxWidth={{ base: "inherit" }}
          animation={`${keyframes`
     from {transform: rotate(-20deg);}
     to {transform: rotate(10deg)}
   `} infinite 3s ease-in-out alternate`}
          zIndex="-100"
        />

        {/* <Notification /> */}
        <Header />
        <a id="#top" {...useSmoothScrollTo("#top")} />
        <Hero
          tvl={metrics?.tvl}
          staked_pools_count={metrics?.staked_pools_count}
          st_near_30_day_apy={metrics?.st_near_30_day_apy}
        />
        <a id="#staking-farms" {...useSmoothScrollTo("#staking-farms")} />
        <StakingFarms />
        <a id="#ecosystem" {...useSmoothScrollTo("#ecosystem")} />
        <Ecosystem />
        <a id="#how-it-works" {...useSmoothScrollTo("#how-it-works")} />
        <HowItWorks />
        <a id="#technology" {...useSmoothScrollTo("#technology")} />
        <Technology />
        <a id="#benefits" {...useSmoothScrollTo("#benefits")} />
        <Benefits />
        <a id="#security" {...useSmoothScrollTo("#security")} />
        <Security />
        <a id="#investors" {...useSmoothScrollTo("#investors")} />
        <Investors />
        <a id="#latest-news" {...useSmoothScrollTo("#latest-news")} />
        <LatestNews />
        <a id="#community" {...useSmoothScrollTo("#community")} />
        <Comunity />
        <Footer />
      </Container>
    </>
  );
};

export async function getServerSideProps({}) {
  const metrics = await api.getMetrics();
  return {
    props: {
      metrics,
    },
  };
}

export default App;
