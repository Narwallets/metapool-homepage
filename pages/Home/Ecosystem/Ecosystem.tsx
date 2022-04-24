import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
  Circle,
  Heading,
  Tag,
  Stack,
  Square,
} from "@chakra-ui/react";
import Item from "./Item";

const Ecosystem: NextPage = () => (
  <Container maxW="container.2xl" pb="10rem">
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
          letterSpacing="0.6px"
          fontWeight="semibold"
        >
          STNEAR ECOSYSTEM
        </Text>
        <Heading
          size="2xl"
          pt={{ base: "15px", lg: "15px" }}
          pb={{ base: "43px", lg: "43px" }}
        >
          Use stNEAR across growing <br />
          DeFi Ecosystem
        </Heading>
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
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 5, lg: 10 }}
    >
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
      <Box
        bg="white"
        rounded="lg"
        p={["1rem", "2rem"]}
        border={"2px"}
        borderColor="#E2E8F0"
        mx="auto"
        w="full"
      >
        <Stack w="100%" justifyContent={"space-between"} px="0">
          <Square size="64px" bgColor={"#F1F5F9"} />
          <Box>
            <Flex textStyle="h5" fontFamily={"Inter"}>
              <Box w="80px" h="20px" bgColor={"#F1F5F9"} />
              More Coming Soon
              <Tag
                textColor={"white"}
                fontFamily={["Inter"]}
                fontSize="10px"
                fontWeight={"semibold"}
                bg="#F59E0B"
                borderRadius={"2px"}
                mx="4px"
              >
                Soon!
              </Tag>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </SimpleGrid>
  </Container>
);

export default Ecosystem;
