import type { NextPage } from "next";
import Head from "next/head";
import {
  ChakraProvider,
  theme,
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Image,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Center
          w="100%"
          bg="white"
          p="17px"
          fontWeight="semibold"
          fontSize="md"
        >
          This is a news update that worth to pay attention and maybe click on
          it
        </Center>
        <Box overflow="hidden" w="100%" h="668px" position="relative">
          <VStack
            w="100%"
            h="100%"
            spacing="0"
            _before={{
              animation: `${keyframes`
                from {transform: rotate(-20deg);}
                to {transform: rotate(10deg)}
              `} infinite 5s ease-in-out alternate`,
              content: '""',
              position: "absolute",
              bgRepeat: "no-repeat",
              bgSize: "cover",
              w: "200%",
              h: "200%",
              top: "-50%",
              left: "-50%",
              zIndex: "-1",
              bg: "#F2F2F2 url('bg-home-main.svg') center center",
            }}
          >
            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              py="2rem"
              px="4rem"
            >
              <Image alt="logo" src={"logo.svg"} w="202" h="34" />
              <Box
                as="button"
                p={4}
                fontWeight="semibold"
                borderRadius="30px"
                bg="transparent"
                border="2px"
                py="14px"
                px="44px"
              >
                <Text fontWeight="semibold">Start staking</Text>
              </Box>
            </Flex>
            <Center
              color="#0F172A"
              fontSize="8xl"
              fontWeight="bold"
              textAlign="center"
              lineHeight="90%"
              pt="5rem"
            >
              Stake NEAR,
              <br /> maximise returns
            </Center>
            <Center
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              py="4rem"
            >
              <p>
                Receive stNEAR to access liquidity without having to sell your
                assets.
              </p>
            </Center>
            <Center>
              <Box
                as="button"
                p={4}
                color="white"
                fontWeight="semibold"
                bg="#0F172A"
                borderRadius="30px"
                border="2px"
                borderColor="#0F172A"
                py="14px"
                px="44px"
              >
                <Text fontWeight="normal">Start staking</Text>
              </Box>
            </Center>
          </VStack>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Home;
