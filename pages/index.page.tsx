import type { NextPage } from "next";
import Head from "next/head";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Hero from "./Hero";
import Notification from "./Notification";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Notification />
        <Hero />
      </ChakraProvider>
    </>
  );
};

export default Home;
