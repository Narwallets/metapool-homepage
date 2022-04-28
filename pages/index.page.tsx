import type { NextPage } from "next";
import Head from "next/head";
import api from "../api";
import { Container, Image, keyframes } from "@chakra-ui/react";
import Parser from "rss-parser";
import * as cheerio from "cheerio";

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
    ref_oct_st_near_apr: string;
  };
  news: any;
}

const App: NextPage<Props> = ({ metrics, news }) => {
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
        <StakingFarms
          st_near_30_day_apy={metrics?.st_near_30_day_apy}
          ref_oct_st_near_apr={metrics?.ref_oct_st_near_apr}
        />
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
        <LatestNews news={news} />
        <a id="#community" {...useSmoothScrollTo("#community")} />
        <Comunity />
        <Footer />
      </Container>
    </>
  );
};

export async function getServerSideProps({}) {
  const metrics = await api.getMetrics();
  const parser = new Parser();
  let feed = await parser.parseURL("https://blog.metapool.app/feed");
  const news = feed.items
    .map((item: any) => {
      return {
        title: item.title,
        creator: item.creator,
        category: item.categories[0],
        image:
          cheerio.load(item.content)("img").attr("data-large-file") || null,
        link: item.link,
      };
    })
    .slice(0, 3);

  return {
    props: {
      metrics,
      news,
    },
  };
}

export default App;
