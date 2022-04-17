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
  <Flex
    fontSize="md"
    position="relative"
    justifyContent="center"
    fontFamily={"Inter"}
  >
    <Container maxW="container.2xl" px={["3rem", "10rem"]} py="100px">
      <Box textAlign="center">
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
        <Center my="122px">
          <SimpleGrid columns={[1, 6]} spacing={10} mx={10}>
            <Image alt="ATT" src="/icons/investors-dragonfly.svg" />
            <Image alt="Farming" src="/icons/investors-att.svg" />
            <Image alt="Farming" src="/icons/investors-move.svg" />
            <Image alt="Farming" src="/icons/investors-svc.svg" />
            <Image alt="Farming" src="/icons/investors-di.svg" />
            <Image alt="Farming" src="/icons/investors-blockwall.svg" />
          </SimpleGrid>
        </Center>
      </Box>
    </Container>
  </Flex>
);

export default Investors;
