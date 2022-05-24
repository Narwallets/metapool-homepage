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
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

interface Props {
  st_near_30_day_apy: string;
  ref_oct_st_near_apr: string;
}

const StakingFarms: NextPage<Props> = ({
  st_near_30_day_apy,
  ref_oct_st_near_apr,
}) => (
  <>
    <a id="#staking-farms" {...useSmoothScrollTo("#staking-farms")} />
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
            Explore our growing range of Products
          </Text>
          <Heading
            size="2xl"
            pt={["15px", "15px"]}
            pb={["43px", "43px"]}
            fontFamily="'Meta Space', 'Space Grotestk'"
          >
            Enter the Meta Pool Ecosystem
          </Heading>
          <Box pb={["76px", "76px"]} fontFamily="Inter">
            At Meta Pool we thrive in building products.
            <br />
            You can stake NEAR direcly on NEAR Mainnet or Aurora, or use stNEAR to fundraise through Meta Yield.
            <br />
            More amazing use cases coming soon...
          </Box>
          <HStack spacing={{ base: "1rem", lg: "4rem" }}>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: "2rem", lg: 10 }}
            >
              <Item
                apy={st_near_30_day_apy}
                title="Stake NEAR"
                description="Stake any amount of NEAR and earn daily staking rewards."
                icon="icons/staking-farms-near.svg"
                url="https://metapool.app/dapp/mainnet/meta/"
              />
              <Item
                apy={st_near_30_day_apy}
                title="Stake wNEAR in Aurora"
                description="Stake any amount of wNEAR and earn daily staking rewards."
                icon="icons/staking-farms-aurora.svg"
                url="https://metapool.app/dapp/mainnet/metapool-aurora/"
              />
              <Item
                apy={ref_oct_st_near_apr}
                title="NEW OCT <> stNEAR Farm"
                description="Farm in a few clicks with Meta Recipes"
                icon="icons/staking-farms-oct.svg"
                url="https://metapool.app/dapp/mainnet/meta/"
              />
            </SimpleGrid>
          </HStack>
        </Box>
      </Container>
    </Flex>
  </>
);

export default StakingFarms;
