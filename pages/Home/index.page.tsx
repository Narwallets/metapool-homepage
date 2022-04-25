import type { NextPage } from "next";
import { Box, Container, Image, keyframes } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import StakingFarms from "./StakingFarms";
import Ecosystem from "./Ecosystem";
import Technology from "./Technology";
import Benefits from "./Benefits";
import Security from "./Security";
import Investors from "./Investors";
import LatestNews from "./LatestNews";
import Comunity from "./Comunity";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import useSmoothScrollTo from "../../hooks/useSmoothScrollTo";

const Home: NextPage = () => {
  return (
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
      <Hero />
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
  );
};

export default Home;
