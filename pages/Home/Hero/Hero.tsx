import type { NextPage } from "next";
import { Center, Box, Flex, Link, Stack } from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";
const Hero: NextPage = () => {
  return (
    <>
      <Center>
        <Box
          textStyle="h1"
          color="#0F172A"
          textAlign="center"
          lineHeight="90%"
          fontSize={{ base: "3xl", sm: "6xl", lg: "8xl" }}
          py={{ base: "1rem", lg: "2rem" }}
        >
          Stake NEAR,
          <br /> maximise returns
        </Box>
      </Center>
      <Center p={{ base: "2rem" }}>
        <Box
          textStyle="h4"
          color="#0F172A"
          textAlign="center"
          lineHeight="110%"
          fontFamily={"Inter"}
          fontWeight="semiBold"
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
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{base: "1rem", lg: "4rem"}}
        px={{base: "0", md: "4rem"}}
        py={{base: "1rem", lg: "0"}}
        justifyContent="space-between"
        alignItems="center"
        borderBottomRadius={{ base: "0px", md: "104px" }}
        bgColor="white"
      >
        <MetapoolData title="Total value locked (TVL)" value="$83,333,333" />
        <MetapoolData title="Annual percentage yield (APY)" value="10.08%" />
        <MetapoolData title="Validators" value="92" />
      </Stack>
    </>
  );
};

export default Hero;
