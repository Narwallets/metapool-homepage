import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Square,
  VStack,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";

const StakingFarms: NextPage = () => (
  <Flex
    w="100%"
    minHeight={"1000px"}
    pt={["138px", "138px", "138px", "138px"]}
    fontSize="md"
    position="relative"
    justifyContent="center"
    bg={"url(/staking-farms-bg.svg) center 600px no-repeat"}
  >
    <Box textAlign="center">
      <Text
        color="secondary"
        fontFamily={"Inter"}
        letterSpacing="wider"
        fontWeight="semibold"
      >
        STAKING FARMS
      </Text>
      <Box
        textStyle="h2"
        pt={["15px", "15px", "15px", "15px"]}
        pb={["43px", "43px", "43px", "43px"]}
      >
        Supported networks
      </Box>
      <Box pb={["76px", "76px", "76px", "76px"]}>
        Meta Pool lets you stake tokens from many networks.
        <br />
        Choose a network below to get started.
      </Box>
      <HStack spacing="32px">
        <Square size="369px" bg="white" rounded="2xl" boxShadow="xl" p="6">
          <VStack>
            <HStack w="100%" justifyContent={"space-between"} px="20px">
              <Image alt="Near" src="icons/staking-farms-near.svg" />
              <Box>
                <Text textStyle="h3">11%</Text>
                <Text>APY</Text>
              </Box>
            </HStack>
            <Box textStyle="h4">Stake Near</Box>
            <Text noOfLines={[2, 2, 2]}>
              Stake any amount of ETH and earn daily staking rewards.
            </Text>
            <Button variant="solid" mb="52px">
              Stake now
            </Button>
          </VStack>
        </Square>
        <Square size="369px" bg="white" rounded="2xl" boxShadow="xl" p="6">
          <VStack>
            <HStack w="100%" justifyContent={"space-between"} px="20px">
              <Image alt="Aurora" src="icons/staking-farms-aurora.svg" />
              <Box>
                <Text textStyle="h3">11%</Text>
                <Text>APY</Text>
              </Box>
            </HStack>
            <Box textStyle="h4">Stake wNear in Aurora</Box>
            <Text noOfLines={[2, 2, 2]}>
              Stake any amount of ETH and earn daily staking rewards.
            </Text>
            <Button variant="solid" mb="52px">
              Stake now
            </Button>
          </VStack>
        </Square>
        <Square size="369px" bg="white" rounded="2xl" boxShadow="2xl">
          <VStack>
            <HStack w="100%" justifyContent={"space-between"} px="20px">
              <Image alt="Oct" src="icons/staking-farms-oct.svg" />
              <Box>
                <Text textStyle="h3">30%</Text>
                <Text>APY</Text>
              </Box>
            </HStack>
            <Box textStyle="h4">New OCT — stNEAR Farm</Box>
            <Text noOfLines={[2, 2, 2]}>New OCT — stNEAR Farm</Text>
            <Button variant="solid" mb="52px">
              Stake now
            </Button>
          </VStack>
        </Square>
      </HStack>
    </Box>
  </Flex>
);

export default StakingFarms;
