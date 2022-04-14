import type { NextPage } from "next";
import { Box, Text, Flex, Container, SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const Ecosystem: NextPage = () => (
  <Container maxW="container.2xl" px={["10rem", "2rem", "10rem"]}>
    <Flex
      pt={["50px", "50px", "50px", "50px"]}
      fontSize="md"
      position="relative"
      justifyContent="center"
      bg={"url(/staking-farms-bg.svg) center 600px no-repeat"}
    >
      <Box textAlign="left" w="full">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="wider"
          fontWeight="semibold"
        >
          STNEAR ECOSYSTEM
        </Text>
        <Box
          textStyle="h2"
          pt={["15px", "15px", "15px", "15px"]}
          pb={["43px", "43px", "43px", "43px"]}
        >
          Use stNEAR across growing <br />
          DeFi Ecosystem
        </Box>
        <Box pb={["76px", "76px", "76px", "76px"]}>
          NEAR protocol delivers unparalleled speed, security, and reliability.
          <br />
          Enjoy almost instant transactions and extremely low fees.
        </Box>
      </Box>
    </Flex>
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
      <Item
        title="Trisolaris"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Ref.Finance"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Burrow"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Jumbo"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Aurigami"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Bastion"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
      <Item
        title="Wannaswap"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
      />
    </SimpleGrid>
  </Container>
);

export default Ecosystem;
