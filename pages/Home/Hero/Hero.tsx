import type { NextPage } from "next";
import { Center, Box, Link, Stack, Heading } from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";
import NumberFormat from "react-number-format";

interface Props {
  tvl: string;
  staked_pools_count: string;
  st_near_30_day_apy: string;
}

const Hero: NextPage<Props> = ({
  tvl,
  staked_pools_count,
  st_near_30_day_apy,
}) => {
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
        <MetapoolData
          title="Total value locked (TVL)"
          value={
            <NumberFormat
              value={tvl}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              decimalScale={0}
            />
          }
        />
        <MetapoolData
          title="Annual percentage yield (APY)"
          value={
            <NumberFormat
              value={st_near_30_day_apy}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"%"}
              decimalScale={2}
            />
          }
        />
        <MetapoolData title="Validators" value={staked_pools_count} />
      </Stack>
    </Box>
  );
};

export default Hero;
