import type { NextPage } from "next";
import { Image, keyframes } from "@chakra-ui/react";
import Hero from "./Hero";
import Notification from "./Notification";
import StakingFarms from "./StakingFarms";
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
      <Image
        alt="background"
        src="icons/bg-home-main.svg"
        position="absolute"
        w="2106px"
        h="1788px"
        left="50%"
        top="50%"
        marginLeft="-1053"
        marginTop="-1400"
        maxWidth="inherit"
        animation={`${keyframes`
     from {transform: rotate(-20deg);}
     to {transform: rotate(10deg)}
   `} infinite 3s ease-in-out alternate`}
        zIndex="-100"
      />

      <Notification />
      <Hero />
      <StakingFarms />
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
