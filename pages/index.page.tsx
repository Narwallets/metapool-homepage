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
        <Layout>
          <Hero
            tvl={metrics?.tvl}
            staked_pools_count={metrics?.staked_pools_count}
            st_near_30_day_apy={metrics?.st_near_30_day_apy}
          />
          <StakingFarms
            st_near_30_day_apy={metrics?.st_near_30_day_apy}
            ref_oct_st_near_apr={metrics?.ref_oct_st_near_apr}
          />
          <Ecosystem platforms={platforms} />
          <HowItWorks />
          <Technology />
          <Benefits />
          <Security />
          <Investors />
          <LatestNews news={news} />
          <Comunity />
        </Layout>
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
