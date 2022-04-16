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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Benefits: NextPage = () => (
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
          BENEFITS
        </Text>
        <Box
          textStyle={["h2", "h2"]}
          pt={["15px", "15px"]}
          pb={["0px", "43px"]}
          lineHeight={"110%"}
        >
          Ways to maximize
          <br />
          returns with stNEAR
        </Box>
      </Box>
    </Flex>
    <HStack spacing="32px">
      <SimpleGrid columns={[1, 3]} spacing={10} mx={10}>
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
            Access liquidity without selling NEAR by borrowing Stablecoins using
            stNEAR as Collateral.
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

    <HStack mt={["50px", "50px"]} spacing="20px" justifyContent="center">
      <Link variant="solid" href="https://metapool.app/dapp/mainnet/meta/">
        Start staking
      </Link>
      <Link variant="link" textColor={"primary"}>
        Find out more <ChevronRightIcon w={6} h={6} color="primary" />
      </Link>
    </HStack>
  </Container>
);

export default Benefits;
