import type { NextPage } from "next";
import {
  Box,
  Circle,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

const Benefits: NextPage = () => (
  <>
    <a id="#benefits" {...useSmoothScrollTo("#benefits")} />
    <Container maxW="container.xl" px={{ base: "2rem", lg: "10rem" }} py="5rem">
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
            BENEFITS
          </Text>
          <Heading
            size={"2xl"}
            pt={["15px", "15px"]}
            pb={["0px", "43px"]}
            lineHeight={"110%"}
            fontFamily={"'Meta Space', 'Space Grotesk'"}
          >
            Ways to maximize
            <br />
            returns with stNEAR
          </Heading>
        </Box>
      </Flex>
      <HStack spacing="32px">
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={10}
          mx={{ base: 2, lg: 10 }}
          fontFamily="Inter"
        >
          <Box textAlign={"left"}>
            <Image alt="Farming" src="/icons/benefits-farming.svg" />
            <br />
            <br />
            <Text textStyle="h5">Farming</Text>
            <Text my={"13px"}>
              Use stNEAR to provide liquidity pools and 3x returns: transaction
              fees, farming rewards &amp; staking rewards.
            </Text>
          </Box>
          <Box textAlign={"left"}>
            <Image alt="Borrowing" src="/icons/benefits-borrowing.svg" />
            <br />
            <br />
            <Text textStyle="h5">Borrowing</Text>
            <Text my={"13px"}>
              Access liquidity without selling NEAR by borrowing Stablecoins
              using stNEAR as Collateral.
            </Text>
          </Box>
          <Box textAlign={"left"}>
            <Image alt="Lending" src="/icons/benefits-lending.svg" />
            <br />
            <br />
            <Text textStyle="h5">Lending</Text>
            <Text my={"13px"}>
              Earn interest by supplying stNEAR to lending platforms.
            </Text>
          </Box>
        </SimpleGrid>
      </HStack>

      <Stack
        direction={["column", "row"]}
        textAlign={["center", "left"]}
        mt={["50px", "50px"]}
        spacing={["0px", "20px"]}
        justifyContent="center"
      >
        <Link
          variant="solid"
          href="https://metapool.app/dapp/mainnet/meta/"
          whiteSpace="nowrap"
        >
          Start staking
        </Link>
        <Link
          href="https://metapool.gitbook.io/master/"
          variant="link"
          textColor={"primary"}
          whiteSpace="nowrap"
          isExternal={true}
        >
          Find out more <ChevronRightIcon w={6} h={6} color="primary" />
        </Link>
      </Stack>
    </Container>
  </>
);

export default Benefits;
