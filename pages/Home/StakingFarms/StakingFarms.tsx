import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  HStack,
  SimpleGrid,
  Heading,
  Container,
} from "@chakra-ui/react";
import Item from "./Item";

const StakingFarms: NextPage = () => (
  <Flex
    w="100%"
    pt={{ base: "4rem", lg: "0rem" }}
    px="20px"
    fontSize="md"
    position="relative"
    justifyContent="center"
    bg={"url(/staking-farms-bg.svg) center bottom no-repeat"}
    bgSize="contain"
  >
    <Container maxW="container.xl" py="10rem">
      <Box textAlign="center">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="0.6px"
          fontWeight="semibold"
        >
          STAKING FARMS
        </Text>
        <Heading size="2xl" pt={["15px", "15px"]} pb={["43px", "43px"]}>
          Supported networks
        </Heading>
        <Box pb={["76px", "76px"]} fontFamily="Inter">
          Meta Pool lets you stake tokens from many networks.
          <br />
          Choose a network below to get started.
        </Box>
        <HStack spacing={{ base: "1rem", lg: "4rem" }}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: "2rem", lg: 10 }}
          >
            <Item
              apy="11%"
              title="Stake Near"
              description="Stake any amount of ETH and earn daily staking rewards."
              icon="icons/staking-farms-near.svg"
            />
            <Item
              apy="11%"
              title="Stake wNear in Aurora"
              description="Stake any amount of ETH and earn daily staking rewards."
              icon="icons/staking-farms-aurora.svg"
            />
            <Item
              apy="30%"
              title="New OCT — stNEAR Farm"
              description="New OCT — stNEAR Farm"
              icon="icons/staking-farms-oct.svg"
            />
          </SimpleGrid>
        </HStack>
      </Box>
    </Container>
  </Flex>
);

export default StakingFarms;
