import type { NextPage } from "next";
import { Box, Container, Flex, Stack, Link, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Technology: NextPage = () => (
  <Box bgColor="#1E293B" textColor={"white"}>
    <Container maxW="container.2xl" px={["3rem", "10rem"]}>
      <Flex
        pt={["50px"]}
        mb={"50px"}
        fontSize="md"
        position="relative"
        justifyContent="center"
      >
        <Box textAlign="left" w="full">
          <Text
            color="secondary"
            fontFamily={"Inter"}
            letterSpacing="wider"
            fontWeight="semibold"
          >
            TECHNOLOGY
          </Text>
          <Box
            textStyle={["h2", "h1"]}
            pt={["15px", "15px"]}
            pb={["0px", "43px"]}
            lineHeight={"110%"}
          >
            Meta Pool,
            <br />
            superior staking
          </Box>
        </Box>
      </Flex>
      <Container maxW="container.2xl" pb={["2rem", "10rem"]}>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={["", "url('/bg-technology-secure.svg') no-repeat center right"]}
          bgSize={["cover", "unset"]}
          h={["auto", "387px"]}
          my={["0px", "32px"]}
        >
          <Box
            w={"full"}
            mr={[0, "50%"]}
            textAlign={"left"}
          >
            <Text color="white" textStyle={"h3"}>
              Immediate unstaking
            </Text>
            <Text color="white" my="30px">
              Traditional unstaking can take up to 72 hours. When you stake with
              Meta Pool, you are able to access your funds immediately through
              Liquid Unstaking for a small fee of just ~0.3%.
            </Text>
            <Link variant="link" textColor={"#818CF8"} pl="0">
              Liquid Staking How-To{" "}
              <ChevronRightIcon w={6} h={6} color="#818CF8" />
            </Link>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={["", "url('/bg-technology-inmediate.svg') no-repeat center left"]}
          h={["auto", "387px"]}
          my="32px"
        >
            <Box w="full" ml={[0, "50%"]} textAlign={"left"}>
              <Text color="white" textStyle={"h3"}>
                Maximise returns in DeFi
              </Text>
              <Text color="white" my="30px">
                Stake NEAR, receive stNEAR you can use across AMMs and Lending
                protocols on Defi and Aurora. You can get attractive yields (20%
                — 90%) on top of your staking rewards.
              </Text>
              <Link variant="link" textColor={"#818CF8"} pl="0">
                Security reference{" "}
                <ChevronRightIcon w={6} h={6} color="#818CF8" />
              </Link>
            </Box>
        </Flex>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={["", "url('/bg-technology-returns.svg') no-repeat center right"]}
          h={["auto", "387px"]}
          my="32px"
        >
            <Box mr={[0, "50%"]}  w="full" textAlign={"left"}>
              <Text color="white" textStyle={"h3"}>
                Secure the Network
              </Text>
              <Text color="white" my="30px">
                Our algorithms automatically delegate NEAR across 95 validators
                and monitor for performance and uptime so you don&apos;t have to
                worry. This helps keep the network decentralised and your funds
                secure.
              </Text>
              <Link variant="link" textColor={"#818CF8"} pl="0">
                DeFi with Meta Pool{" "}
                <ChevronRightIcon w={6} h={6} color="#818CF8" />
              </Link>
            </Box>

        </Flex>
      </Container>
    </Container>
  </Box>
);

export default Technology;
