import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  SimpleGrid,
  Center,
  Image,
} from "@chakra-ui/react";

const Investors: NextPage = () => (
  <Container
    maxW="container.xl"
    px={["3rem", "10rem"]}
    py="100px"
    textAlign="center"
  >
    <Text
      color="secondary"
      fontFamily={"Inter"}
      letterSpacing="wider"
      fontWeight="semibold"
    >
      INVESTORS
    </Text>
    <Box
      textStyle="h2"
      pt={["15px", "15px"]}
      pb={["43px", "43px"]}
      noOfLines={[2, 2]}
      fontFamily="Space Grotesk"
      lineHeight="56px"
    >
      Backed by great people
    </Box>
    <SimpleGrid columns={[3, 6]} spacing={10} my="100px" alignItems={"center"}>
      <Image alt="ATT" src="/icons/investors-dragonfly.svg" />
      <Image alt="Farming" src="/icons/investors-att.svg" />
      <Image alt="Farming" src="/icons/investors-move.svg" />
      <Image alt="Farming" src="/icons/investors-svc.svg" />
      <Image alt="Farming" src="/icons/investors-di.svg" />
      <Image alt="Farming" src="/icons/investors-blockwall.svg" />
    </SimpleGrid>
  </Container>
);

export default Investors;
