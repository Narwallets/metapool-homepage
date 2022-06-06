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
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

const HowItWorks: NextPage = () => (
  <>
    <a id="#how-it-works" {...useSmoothScrollTo("#how-it-works")} />
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
        px={{ base: "2rem", lg: "10rem" }}
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
          <HStack spacing="2rem">
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              spacing={10}
              mx={{ base: "0", lg: 0 }}
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
                <Text textStyle="h5">Deposit NEAR</Text>
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
                  for maximum capital efficiency and additional APY.
                </Text>
              </Box>
            </SimpleGrid>
          </HStack>
        </Box>
        <Stack
          direction={{ base: "column", lg: "row" }}
          mt={"50px"}
          spacing={"1rem"}
          textAlign={{ base: "center", lg: "center" }}
          px={{ base: "1rem", md: "2rem", lg: 0 }}
        >
          <Link
            variant="solid"
            href="https://metapool.app/dapp/mainnet/meta/"
            whiteSpace={"nowrap"}
            isExternal
            mx="auto"
          >
            Start staking
          </Link>
        </Stack>
      </Container>
    </Flex>
  </>
);

export default HowItWorks;
