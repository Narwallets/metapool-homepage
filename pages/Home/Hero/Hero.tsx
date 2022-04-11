import type { NextPage } from "next";
import {
  Button,
  VStack,
  Center,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import MetapoolData from "./MetapoolData";

const Hero: NextPage = () => {
  return (
    <>
      <Box overflow="hidden" w="100%" position="relative">
        <VStack
          w="100%"
          h="100%"
          spacing="0"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            py="2rem"
            px="4rem"
          >
            <Image alt="logo" src={"logo.svg"} w="202" h="34" />
            <Button colorScheme="primary" variant="outline" borderWidth="2px">
              Start staking
            </Button>
          </Flex>
          <Center>
            <Box
              textStyle="h1"
              color="#0F172A"
              textAlign="center"
              lineHeight="90%"
              pt="5rem"
            >
              Stake NEAR,
              <br /> maximise returns
            </Box>
          </Center>
          <Center py="4rem">
            <Box
              textStyle="h4"
              color="#0F172A"
              textAlign="center"
              lineHeight="90%"
              fontFamily={["Inter", "sans-serif"]}
              fontWeight="normal"
            >
              Receive stNEAR to access liquidity without having to sell your
              assets.
            </Box>
          </Center>
          <Center>
            <Button variant="solid" mb="52px">
              Start staking
            </Button>
          </Center>
          <Flex
            w="100%"
            h="182px"
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            px="4rem"
            borderBottomRadius="104"
            bgColor="white"
          >
            <MetapoolData
              title="Total value locked (TVL)"
              value="$83,333,333"
            />
            <MetapoolData
              title="Annual percentage yield (APY)"
              value="10.08%"
            />
            <MetapoolData title="Validators" value="92" />
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
