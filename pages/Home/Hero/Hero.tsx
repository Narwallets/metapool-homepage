import type { NextPage } from "next";
import { Center, Box, Image, Flex, Link } from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";

const Hero: NextPage = () => {
  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        py="2rem"
        px={["2rem", "4rem"]}
      >
        <Image alt="logo" src={"logo.svg"} w="202" h="34" />
        <Link
          colorScheme="primary"
          variant="outlined"
          borderWidth="2px"
          href="https://metapool.app/dapp/mainnet/meta/"
          display={["none", "initial"]}
        >
          Start staking
        </Link>
      </Flex>
      <Center>
        <Box
          textStyle="h1"
          color="#0F172A"
          textAlign="center"
          lineHeight="90%"
          fontSize={["4xl", "8xl"]}
          pt={["2rem", "5rem"]}
        >
          Stake NEAR,
          <br /> maximise returns
        </Box>
      </Center>
      <Center p="4rem">
        <Box
          textStyle="h4"
          color="#0F172A"
          textAlign="center"
          lineHeight="110%"
          fontFamily={["Inter", "sans-serif"]}
          fontWeight="normal"
          noOfLines={3}
        >
          Receive stNEAR to access liquidity without having to sell your assets.
        </Box>
      </Center>
      <Center>
        <Link
          variant="solid"
          href="https://metapool.app/dapp/mainnet/meta/"
          mb="52px"
        >
          Start staking
        </Link>
      </Center>
      <Flex
        w="100%"
        h={["152px", "182px"]}
        justifyContent="space-between"
        alignItems="center"
        direction={["column", "row"]}
        px={["2rem", "4rem"]}
        borderBottomRadius="104"
        bgColor="white"
      >
        <MetapoolData title="Total value locked (TVL)" value="$83,333,333" />
        <MetapoolData title="Annual percentage yield (APY)" value="10.08%" />
        <MetapoolData title="Validators" value="92" />
      </Flex>
    </>
  );
};

export default Hero;
