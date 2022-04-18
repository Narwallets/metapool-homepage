import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
  Circle,
} from "@chakra-ui/react";
import Item from "./Item";

const Ecosystem: NextPage = () => (
  <Container maxW="container.2xl" pb="10rem" px={["3rem", "10rem"]}>
    <Flex
      pt={["50px"]}
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
        <Box textStyle={["h3", "h2"]} pt={["15px", "15px"]} pb={["43px", "43px"]}>
          Use stNEAR across growing <br />
          DeFi Ecosystem
        </Box>
        <Box pb={["76px", "76px"]}>
          NEAR protocol delivers unparalleled speed, security, and reliability.
          <br />
          Enjoy almost instant transactions and extremely low fees.
        </Box>
      </Box>
    </Flex>
    <Flex direction="row" justifyContent="flex-end">
      <Flex
        mx="8px"
        my="16px"
        direction="row"
        alignItems="center"
        justifyContent={"center"}
      >
        <Circle size="8px" bgColor="#F97316" mr="8px" />
        Testnet
      </Flex>
      <Flex
        mx="8px"
        my="16px"
        direction="row"
        alignItems="center"
        justifyContent={"center"}
      >
        <Circle size="8px" bgColor="#10B981" mr="8px" />
        Mainnet
      </Flex>
    </Flex>
    <SimpleGrid columns={[1, 3]} spacing={10}>
      <Item
        title="Trisolaris"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-trisolaris.svg"
        type="EXCHANGE"
        env="mainnet"
      />
      <Item
        title="Ref.Finance"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-refinance.svg"
        type="DEFI"
        env="mainnet"
      />
      <Item
        title="Burrow"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-burrow.svg"
        type="LENDING"
        env="testnet"
      />
      <Item
        title="Jumbo"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-jumbo.svg"
        type="EXCHANGE"
        env="mainnet"
        soon={true}
      />
      <Item
        title="Aurigami"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-aurigami.svg"
        type="INFRASTRUCTURE"
        env="mainnet"
        soon={true}
      />
      <Item
        title="Bastion"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-bastion.svg"
        type="LENDING"
        env="testnet"
        soon={true}
      />
      <Item
        title="Wannaswap"
        description="Trisolaris is the first AMM exchange on Aurora."
        icon="icons/ecosystem-wannaswap.svg"
        type="EXCHANGE"
        soon={true}
      />
      <Item title="More comming soon" />
    </SimpleGrid>
  </Container>
);

export default Ecosystem;
