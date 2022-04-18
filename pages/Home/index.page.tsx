import type { NextPage } from "next";
import { Container, Image, keyframes } from "@chakra-ui/react";
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
import HowItWorks from "./HowItWorks";

const Home: NextPage = () => {
  return (
    <Container position="relative" maxW='container.100' p={0} overflow="clip" maxWidth="100vw">
      <Image
        alt="background"
        src="bg-home-main.svg"
        position="absolute"
        w={["1082px", "2106px"]}
        h={["841px", "1788px"]}
        left={["-50%", "50%"]}
        marginLeft={[null, "-1053px"]}
        marginTop={[null,"-300px"]}
        maxWidth="inherit"
        animation={`${keyframes`
     from {transform: rotate(-20deg);}
     to {transform: rotate(10deg)}
   `} infinite 3s ease-in-out alternate`}
        zIndex="-100"
      />

      {/* <Notification /> */}
      <Hero />
      <StakingFarms />
      <Ecosystem />
      <HowItWorks />
      <Technology />
      <Benefits />
      <Security />
      <Investors />
      <LatestNews />
      <Comunity />
      <Footer />
    </Container>
  );
};

export default Home;
