import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Item from "./Item";
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

const Technology: NextPage = () => (
  <>
    <a id="#technology" {...useSmoothScrollTo("#technology")} />
    <Box bgColor="#1E293B" textColor={"white"} px="1rem">
      <Container maxW="container.xl">
        <Flex
          pt={["7rem"]}
          fontSize="md"
          position="relative"
          justifyContent="center"
        >
          <Box textAlign="left" w="full">
            <Text
              color="secondary"
              fontFamily={"Inter"}
              letterSpacing="0.6px"
              fontWeight="semibold"
            >
              TECHNOLOGY
            </Text>
            <Heading
              size={useBreakpointValue({ base: "3xl", lg: "4xl" })}
              pt={{ base: "15px", lg: "15px" }}
              pb={{ base: "0px", lg: "43px" }}
              lineHeight={"110%"}
              fontFamily="'Meta Space', 'Space Grotesk'"
            >
              Meta Pool,
              <br />
              superior staking
            </Heading>
          </Box>
        </Flex>
        <Box pb={{ base: "2rem", lg: "10rem" }}>
          <Item
            title="Secure the Network"
            description="Our algorithms automatically delegate NEAR across 87 validators and monitor 
              for performance and uptime so you don't have to worry. 
              This helps keep the network decentralised and your funds secure."
            linkText="Security reference"
            linkHref="https://metapool.gitbook.io/master/litepaper-1/risks/audits"
            imageDesktop="images/bg-technology-secure.svg"
            imageMobile="images/bg-technology-mobile-secure.svg"
            inverted={false}
          />
          <Item
            title="Liquid (Immediate) Unstaking"
            description="Traditional unstaking can take up to 72 hours. When you stake with Meta Pool, you are able to access your funds immediately through Liquid Unstaking for a small fee of just ~0.3%."
            linkText="Liquid Staking How-To"
            linkHref="https://metapool.gitbook.io/master/tutorials-1/meta-pool-on-near/how-to-stake-step-by-step"
            imageDesktop="images/bg-technology-inmediate.svg"
            imageMobile="images/bg-technology-mobile-inmediate.svg"
            inverted={true}
          />
          <Item
            title="Maximize returns in DeFi"
            description="Stake NEAR, receive stNEAR you can use across AMMs and Lending protocols on NEAR and Aurora. You can get attractive yields (20% — 90%) on top of your staking rewards."
            linkText="DeFi with Meta Pool"
            linkHref="#ecosystem"
            imageDesktop="images/bg-technology-returns.svg"
            imageMobile="images/bg-technology-mobile-returns.svg"
            inverted={false}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default Technology;
