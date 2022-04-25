import type { NextPage } from "next";
import { Center, Box, Flex, Link, Stack, Heading } from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";
const Hero: NextPage = () => {
  return (
    <Box pt="10rem">
      <Center>
        <Heading
          size="4xl"
          as="h1"
          color="#0F172A"
          textAlign="center"
          lineHeight="90%"
          fontSize={{ base: "3xl", sm: "6xl", lg: "8xl" }}
          fontFamily={"'Meta Space', 'Space Grotesk'"}
        >
          Stake NEAR,
          <br /> maximise returns
        </Heading>
      </Center>
      <Center p={{ base: "3rem" }}>
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
        spacing={{ base: "1rem", lg: "4rem" }}
        px={{ base: "0", md: "4rem", lg: "8rem" }}
        py={{ base: "1rem", lg: "0" }}
        justifyContent="space-between"
        alignItems="center"
        borderBottomRadius={{ base: "0px", md: "104px" }}
        bgColor="white"
      >
        <MetapoolData title="Total value locked (TVL)" value="$117,143,333" />
        <MetapoolData title="Annual percentage yield (APY)" value="11%" />
        <MetapoolData title="Validators" value="92" />
      </Stack>
    </Box>
  );
};

export default Hero;
