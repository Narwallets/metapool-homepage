import type { NextPage } from "next";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  Circle,
  Container,
  Button,
  Center,
} from "@chakra-ui/react";

const HowItWorks: NextPage = () => (
  <Flex
    fontSize="md"
    position="relative"
    justifyContent="center"
    fontFamily={"Inter"}
    bg={"url(/bg-home-main.svg) no-repeat white"}
    bgPosition={["center", "top"]}
  >
    <Container maxW="container.2xl" px={["3rem", "10rem"]} py="100px">
      <Box textAlign="center">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="wider"
          fontWeight="semibold"
        >
          HOW IT WORKS
        </Text>
        <Box
          textStyle="h2"
          pt={["15px", "15px"]}
          pb={["43px", "43px"]}
          noOfLines={[2, 2]}
          lineHeight="56px"
        >
          Stake NEAR with Meta Pool <br />
          in three simple steps
        </Box>
        <HStack spacing="32px">
          <SimpleGrid columns={[1, 3]} spacing={10} mx={10}>
            <Box textAlign={"left"}>
              <Circle
                size="64px"
                bgColor="white"
                shadow={"lg"}
                fontSize={24}
                fontWeight="900"
              >
                1
              </Circle>
              <br />
              <Text textStyle="h5">Stake Near</Text>
              <Text my={"13px"}>
                Deposit your NEAR into Meta Pool, we distribute it across best
                performing validators, start earning staking rewards.
              </Text>
            </Box>
            <Box textAlign={"left"}>
              <Circle
                size="64px"
                bgColor="white"
                shadow={"lg"}
                fontSize={24}
                fontWeight="900"
              >
                2
              </Circle>
              <br />
              <Text textStyle="h5">Receive stNEAR</Text>
              <Text my={"13px"}>
                Staked NEAR (stNEAR) is a liquid token that represents your
                deposit/position with Meta Pool and that you can use across a
                growing number of DeFi apps.
              </Text>
            </Box>
            <Box textAlign={"left"}>
              <Circle
                size="64px"
                bgColor="white"
                shadow={"lg"}
                fontSize={24}
                fontWeight="900"
              >
                3
              </Circle>
              <br />
              <Text textStyle="h5">Participate in DeFi</Text>
              <Text my={"13px"}>
                Deploy your stNEAR into the growing number of DeFi platforms for
                maximum capital efficiency.
              </Text>
            </Box>
          </SimpleGrid>
        </HStack>
      </Box>
      <HStack mt={["50px", "50px"]} spacing="20px" justifyContent="center">
        <Button variant="solid">Start staking</Button>
        <Button variant="link" textColor={"primary"}>Find out more <ChevronRightIcon w={6} h={6} color="primary" /></Button>
      </HStack>
    </Container>
  </Flex>
);

export default HowItWorks;
