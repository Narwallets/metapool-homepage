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

interface Props {
  st_near_30_day_apy: string;
}

const StakingFarms: NextPage<Props> = ({ st_near_30_day_apy }) => (
  <section id="staking-farms">
    <Flex
      w="100%"
      pt={{ base: "0rem", lg: "0rem" }}
      px="20px"
      fontSize="md"
      position="relative"
      justifyContent="center"
      bg={"url(images/staking-farms-bg.svg) center bottom no-repeat"}
      bgSize="contain"
    >
      <Container maxW="container.lg" py={{ base: "4rem", lg: "10rem" }}>
        <Box textAlign="center">
          <Text
            color="secondary"
            fontFamily={"Inter"}
            letterSpacing="0.6px"
            fontWeight="semibold"
            textTransform={"uppercase"}
          >
            Explore our growing range of Products
          </Text>
          <Heading
            size="2xl"
            pt={["15px", "15px"]}
            pb={["43px", "43px"]}
            fontFamily="'Meta Space', 'Space Grotestk'"
          >
            Enter the Meta Pool ecosystem
          </Heading>
          <Box
            pb={["76px", "76px"]}
            fontFamily="Inter"
            maxWidth={"550"}
            mx="auto"
          >
            At Meta Pool we thrive in building products. Currently, you can
            stake NEAR directly on NEAR Mainnet or Aurora, or use stNEAR to
            fundraise through Meta Yield. More amazing use cases coming soon...
          </Box>
          <HStack>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: "2rem", lg: 10 }}
            >
              <Item
                ctaLabel="Stake now"
                apy={st_near_30_day_apy}
                title="Stake NEAR"
                description="Deposit NEAR. Receive stNEAR. Earn staking rewards. Easy."
                icon="icons/staking-farms-near.svg"
                url="https://metapool.app/dapp/mainnet/meta/"
              />
              <Item
                ctaLabel="Stake now"
                title="Stake wNear in Aurora"
                description="Deposit wNEAR directly from Aurora with your Metamask wallet. Receive stNEAR. "
                icon="icons/staking-farms-aurora.svg"
                url="https://metapool.app/dapp/mainnet/metapool-aurora/"
              />
              <Item
                ctaLabel="Visit"
                title="Meta Yield: NEAR Projects Crowdfunding Platform"
                description="Lossless staking rewards-based fundraising: mint new project tokens with your staking rewards, not your NEAR assets."
                icon="icons/staking-farms-metayield.svg"
                url="https://metayield.app/"
              />
              <Item
                ctaLabel="Visit"
                title="Meta Recipes: Additional APY for your Farm"
                description="Deposit wNEAR directly from Aurora with your Metamask wallet. Receive stNEAR. "
                icon="icons/staking-farms-metarecipes.svg"
                url="https://metayield.app/"
              />
            </SimpleGrid>
          </HStack>
          <Text fontSize="xs" color="#94A3B8" pt="2rem">
            * APY is based on the 30 day average price of stNEAR
          </Text>
        </Box>
      </Container>
    </Flex>
  </section>
);

export default StakingFarms;
