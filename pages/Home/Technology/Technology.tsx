import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Stack,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Technology: NextPage = () => (
  <Box bgColor="#1E293B" textColor={"white"}>
    <Container maxW="container.2xl" px={{ base: "1rem", lg: "10rem" }}>
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
            letterSpacing="0.6px"
            fontWeight="semibold"
          >
            TECHNOLOGY
          </Text>
          <Heading
            size="2xl"
            pt={{ base: "15px", lg: "15px" }}
            pb={{ base: "0px", lg: "43px" }}
            lineHeight={"110%"}
          >
            Meta Pool,
            <br />
            superior staking
          </Heading>
        </Box>
      </Flex>
      <Container maxW="container.2xl" pb={{ base: "2rem", lg: "10rem" }}>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={{
            base: "",
            lg: "url('/bg-technology-secure.svg') no-repeat center right",
          }}
          bgSize={{ base: "cover", lg: "unset" }}
          h={{ base: "auto", lg: "387px" }}
          my={{ base: "0px", lg: "32px" }}
        >
          <Box mr={{ base: 0, lg: "50%" }} w="full" textAlign={"left"}>
            <Text color="white" textStyle={"h3"} fontFamily="Inter">
              Secure the Network
            </Text>
            <Text color="white" my="30px" fontFamily="Inter">
              Our algorithms automatically delegate NEAR across 95 validators
              and monitor for performance and uptime so you don&apos;t have to
              worry. This helps keep the network decentralised and your funds
              secure.
            </Text>
            <Link
              variant="link"
              textColor={"#818CF8"}
              pl="0"
              whiteSpace={"nowrap"}
            >
              Security reference{" "}
              <ChevronRightIcon w={6} h={6} color="#818CF8" />
            </Link>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={{
            base: "",
            lg: "url('/bg-technology-secure.svg') no-repeat center left",
          }}
          h={["auto", "387px"]}
          my="32px"
        >
          <Box w={"full"} ml={[0, "50%"]} textAlign={"left"}>
            <Text color="white" textStyle={"h3"} fontFamily="Inter">
              Immediate unstaking
            </Text>
            <Text color="white" my="30px" fontFamily="Inter">
              Traditional unstaking can take up to 72 hours. When you stake with
              Meta Pool, you are able to access your funds immediately through
              Liquid Unstaking for a small fee of just ~0.3%.
            </Text>
            <Link
              variant="link"
              textColor={"#818CF8"}
              pl="0"
              whiteSpace={"nowrap"}
            >
              Liquid Staking How-To{" "}
              <ChevronRightIcon w={6} h={6} color="#818CF8" />
            </Link>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          borderRadius={"2xl"}
          bg={{
            base: "",
            lg: "url('/bg-technology-secure.svg') no-repeat center right",
          }}
          h={["auto", "387px"]}
          my="32px"
        >
          <Box w="full" mr={[0, "50%"]} textAlign={"left"}>
            <Text color="white" textStyle={"h3"} fontFamily="Inter">
              Maximise returns in DeFi
            </Text>
            <Text color="white" my="30px" fontFamily="Inter">
              Stake NEAR, receive stNEAR you can use across AMMs and Lending
              protocols on Defi and Aurora. You can get attractive yields (20% —
              90%) on top of your staking rewards.
            </Text>
            <Link
              variant="link"
              textColor={"#818CF8"}
              pl="0"
              whiteSpace={"nowrap"}
            >
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
