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
  Link,
  Stack,
  Heading,
} from "@chakra-ui/react";

const HowItWorks: NextPage = () => {
  return (
    <Flex
      fontSize="md"
      position="relative"
      justifyContent="center"
      fontFamily={"Inter"}
      bg={"url(/bg-home-main.svg) no-repeat white"}
      bgPosition={["center", "top"]}
    >
      <Container
        maxW="container.xl"
        px={{ base: "1rem", lg: "10rem" }}
        py="7rem"
      >
        <Box textAlign="center">
          <Text
            color="secondary"
            fontFamily={"Inter"}
            letterSpacing="0.6px"
            fontWeight="semibold"
          >
            HOW IT WORKS
          </Text>
          <Heading
            size="2xl"
            fontFamily="'Meta Space', 'Space Grotestk'"
            pt={["15px", "15px"]}
            pb={["43px", "43px"]}
            lineHeight="48px"
            maxW={"650px"}
            mx="auto"
          >
            Stake NEAR with Meta Pool in three simple steps
          </Heading>
          <HStack spacing="32px">
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              spacing={10}
              mx={10}
              my={10}
            >
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
                  Deploy your stNEAR into the growing number of DeFi platforms
                  for maximum capital efficiency.
                </Text>
              </Box>
            </SimpleGrid>
          </HStack>
        </Box>
        <Stack
          direction={["column", "row"]}
          mt={["50px", "50px"]}
          spacing={["0px", "20px"]}
          textAlign={["center", "left"]}
          px={["1rem", "0"]}
        >
          <Link
            variant="solid"
            href="https://metapool.app/dapp/mainnet/meta/"
            whiteSpace={"nowrap"}
          >
            Start staking
          </Link>
          <Link
            href="https://metapool.gitbook.io/master/"
            variant="link"
            textColor={"primary"}
            whiteSpace={"nowrap"}
          >
            Find out more <ChevronRightIcon w={6} h={6} color="primary" />
          </Link>
        </Stack>
      </Container>
    </Flex>
  );
};

export default HowItWorks;
