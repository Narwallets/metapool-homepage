import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
  Circle,
  Heading,
  Tag,
  Square,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Item from "./Item";
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

interface Props {
  platforms: any[];
}

const Ecosystem: NextPage<Props> = ({ platforms }) => (
  <>
    <a id="#ecosystem" {...useSmoothScrollTo("#ecosystem")} />
    <Box bgColor="#F8FAFC" px="1rem">
      <Container maxW="container.xl" py="4rem">
        <Flex
          pt={["50px"]}
          fontSize="md"
          position="relative"
          justifyContent="center"
          bg={"url(/staking-farms-bg.svg) center 600px no-repeat"}
        >
          <Box textAlign="left" w="full">
            <Text
              color="secondary"
              fontFamily={"Inter"}
              letterSpacing="0.6px"
              fontWeight="semibold"
            >
              STNEAR ECOSYSTEM
            </Text>
            <Heading
              size="2xl"
              pt={{ base: "15px", lg: "15px" }}
              pb={{ base: "43px", lg: "43px" }}
              fontFamily="'Meta Space', 'Space Grotestk'"
            >
              Use stNEAR across growing <br />
              DeFi Ecosystem
            </Heading>
            <Box pb={["76px", "76px"]}>
              NEAR Protocol delivers unparalleled speed, security, and
              reliability.
              <br />
              Enjoy almost instant transactions and extremely low fees.
            </Box>
          </Box>
        </Flex>
        <Flex direction="row" justifyContent="flex-end">
          <Flex
            mx="8px"
            my="16px"
            direction="row"
            alignItems="center"
            justifyContent={"center"}
          >
            <Circle size="8px" bgColor="#F97316" mr="8px" />
            Testnet
          </Flex>
          <Flex
            mx="8px"
            my="16px"
            direction="row"
            alignItems="center"
            justifyContent={"center"}
          >
            <Circle size="8px" bgColor="#10B981" mr="8px" />
            Mainnet
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 5, lg: 10 }}
        >
          {platforms.map((platform) => (
            <Item
              key={platform.title}
              title={platform.title}
              description={platform.description || "-"}
              icon={platform.image}
              type={platform.tag}
              env={platform.test ? "testnet" : "mainnet"}
            />
          ))}

          <Box
            bg="white"
            rounded="lg"
            p={["1rem", "2rem"]}
            border={"2px"}
            borderColor="#E2E8F0"
            mx="auto"
            w="full"
          >
            <HStack
              spacing="1rem"
              direction="row"
              w="full"
              alignItems={"flex-start"}
              px="0"
            >
              <Square size="64px" bgColor={"#F1F5F9"} />
              <VStack
                spacing="1rem"
                direction="column"
                alignItems={"flex-start"}
                textStyle="h5"
                fontFamily={"Inter"}
              >
                <Box w="80px" h="20px" bgColor={"#F1F5F9"} />
                <Text>
                  More Coming Soon{" "}
                  <Tag
                    textColor={"white"}
                    fontFamily={["Inter"]}
                    fontSize="10px"
                    fontWeight={"semibold"}
                    bg="#F59E0B"
                    borderRadius={"2px"}
                    mx="4px"
                  >
                    Soon!
                  </Tag>
                </Text>
              </VStack>
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  </>
);

export default Ecosystem;
