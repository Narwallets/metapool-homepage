import type { NextPage } from "next";
import Head from "next/head";
import api from "../api";
import { Container, Image, keyframes } from "@chakra-ui/react";
import Parser from "rss-parser";
import * as cheerio from "cheerio";

import Hero from "./Home/Hero";
import StakingFarms from "./Home/StakingFarms";
import Benefits from "./Home/Benefits";
import Comunity from "./Home/Comunity";
import Ecosystem from "./Home/Ecosystem";
import HowItWorks from "./Home/HowItWorks";
import Investors from "./Home/Investors";
import LatestNews from "./Home/LatestNews";
import Security from "./Home/Security";
import Technology from "./Home/Technology";

import platforms from "../config/platforms.json";
import Layout from "../components/Layout";

interface Props {
  metrics: {
    tvl: string;
    staked_pools_count: string;
    st_near_30_day_apy: string;
  };
  news: any;
}

function App({ metrics, news }: Props) {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <Container
        position="relative"
        maxW="container.100"
        p={0}
        overflow="hidden"
      >
        <Image
          alt="background"
          src="bg-home-main.svg"
          position="absolute"
          marginLeft={{ base: "-815px", md: "0px" }}
          maxWidth={{ base: "max-content", md: "inherit" }}
          top={{ base: "initial", md: 0 }}
          left={{ base: "-100px", md: "inherit" }}
          marginTop={{ base: "-100px", md: "inherit" }}
          maxH={{ base: "max-content", md: "70rem" }}
          animation={`${keyframes`
     from {transform: rotate(-20deg);}
     to {transform: rotate(10deg)}
   `} infinite 3s ease-in-out alternate`}
          zIndex="-100"
        />

        {/* <Notification /> */}
        <Layout>
          <Hero
            tvl={metrics?.tvl}
            staked_pools_count={metrics?.staked_pools_count}
            st_near_30_day_apy={metrics?.st_near_30_day_apy}
          />
          <StakingFarms st_near_30_day_apy={metrics?.st_near_30_day_apy} />
          <Ecosystem platforms={platforms} />
          <HowItWorks />
          <Technology />
          <Benefits />
          <Security />
          <Investors />
          <LatestNews news={news} />
          <Comunity />
        </Layout>
      </Container>
    </>
  );
}

App.getInitialProps = async () => {
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
  console.info({
    metrics,
    news,
  });
  return {
    metrics,
    news,
  };
};

export default App;
