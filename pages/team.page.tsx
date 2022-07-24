/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import {
  Text,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Box,
  Img,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";

const avatars = [
  {
    name: "Claudio Cossio",
    role: "Founder",
    image: "/images/avatars/Claudio.png",
  },
  {
    name: "Lucio",
    role: "Founder / CTO",
    image: "/images/avatars/Lucio.png",
  },
  {
    name: "Brian",
    role: "Marketing",
    image: "/images/avatars/Brian.png",
  },
  {
    name: "Francisco",
    role: "Grow",
    image: "/images/avatars/Francisco.png",
  },
  {
    name: "Alona",
    role: "Marketing",
    image: "/images/avatars/Alona.png",
  },
  {
    name: "Claudio Cossio",
    role: "Founder",
    image: "/images/avatars/Claudio.png",
  },
  {
    name: "Lucio",
    role: "Founder / CTO",
    image: "/images/avatars/Lucio.png",
  },
  {
    name: "Brian",
    role: "Marketing",
    image: "/images/avatars/Brian.png",
  },
  {
    name: "Francisco",
    role: "Grow",
    image: "/images/avatars/Francisco.png",
  },
  {
    name: "Alona",
    role: "Marketing",
    image: "/images/avatars/Alona.png",
  },
];

const Team: NextPage = () => (
  <>
    <Head>
      <title>Meta Pool: Our Team</title>
      <meta
        name="description"
        content="Meta Pool Liquid Staking Platform Legal Notice and Risk Disclosure Statement"
      />
    </Head>
    <Layout>
      <Container maxW="container.xl" pt="6rem">
        <Text
          color="secondary"
          fontSize="16px"
          fontFamily={"Inter"}
          letterSpacing="0.6px"
          fontWeight="semibold"
          pt={["70px", "104px"]}
          pb={["20px", "20px"]}
        >
          PEOPLE BEHIND META POOL
        </Text>
        <Heading
          size="2xl"
          fontFamily="'Meta Space', 'Space Grotestk'"
          pt={["20px", "40px"]}
          fontSize={{ base: "75px", lg: "104px" }}
          lineHeight="48px"
        >
          Our Team
        </Heading>
        <SimpleGrid
          py={["100px", "150px"]}
          columns={{ base: 2, md: 3, lg: 3, xl: 5 }}
          mx={{ base: "1rem", md: "3rem", lg: "3rem" }}
          alignItems={"center"}
          justifyContent="center"
          spacing={20}
        >
          {avatars.map((avatar: any) => (
            <React.Fragment key={avatar.name}>
              <VStack alignItems={"flex-start"}>
                <Box bgColor="white" my="2" rounded="lg">
                  <Img src={avatar.image} alt={avatar.name} />
                </Box>
                <Text fontSize="sm" fontWeight={"700"}>{avatar.name}</Text>
                <Text fontSize="sm">{avatar.role}</Text>
              </VStack>
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  </>
);

export default Team;
