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

const Technology: NextPage = () => (
  <Box bgColor="#1E293B" textColor={"white"}>
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
            size={useBreakpointValue({ base: "2xl", lg: "4xl" })}
            pt={{ base: "15px", lg: "15px" }}
            pb={{ base: "0px", lg: "43px" }}
            lineHeight={"110%"}
            fontFamily="Space Grotesk"
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
          description="Our algorithms automatically delegate NEAR across 95 validators
              and monitor for performance and uptime so you don't have to
              worry. This helps keep the network decentralised and your funds
              secure."
          linkText="Security reference"
          linkHref="#"
          image="/bg-technology-secure.svg"
          inverted={false}
        />
        <Item
          title="Immediate unstaking"
          description="Traditional unstaking can take up to 72 hours. When you stake with
          Meta Pool, you are able to access your funds immediately through
          Liquid Unstaking for a small fee of just ~0.3%."
          linkText="Liquid Staking How-To"
          linkHref="#"
          image="bg-technology-inmediate.svg"
          inverted={true}
        />
        <Item
          title="Maximise returns in DeFi"
          description="Stake NEAR, receive stNEAR you can use across AMMs and Lending
          protocols on Defi and Aurora. You can get attractive yields (20% —
          90%) on top of your staking rewards."
          linkText="DeFi with Meta Pool"
          linkHref="#"
          image="bg-technology-returns.svg"
          inverted={false}
        />
      </Box>
    </Container>
  </Box>
);

export default Technology;
