import type { NextPage } from "next";
import { Container, Text, SimpleGrid, Image, Heading, Center } from "@chakra-ui/react";

const Investors: NextPage = () => (
  <Center flexDirection={"column"} px="2rem">
    <Text
      color="secondary"
      fontFamily={"Inter"}
      letterSpacing="0.6px"
      fontWeight="semibold"
    >
      INVESTORS
    </Text>
    <Heading
      as="h2"
      pt={["15px", "15px"]}
      pb={["43px", "43px"]}
      fontFamily="Space Grotesk"
    >
      Backed by great people
    </Heading>
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 3, xl: 6 }}
      mx={{ base: "1rem", md: "3rem", lg: "0rem" }}
      alignItems={"center"}
      spacing={10}
    >
      <Image
        alt="DragonFly"
        src="/icons/investors-dragonfly.svg"
        minW={"150px"}
      />
      <Image
        alt="ATT"
        src="/icons/investors-att.svg"
        minW={"150px"}
      />
      <Image
        alt="Move"
        src="/icons/investors-move.svg"
        minW={"150px"}
      />
      <Image
        alt="SVC"
        src="/icons/investors-svc.svg"
        minW={"150px"}
      />
      <Image
        alt="DI"
        src="/icons/investors-di.svg"
        minW={"150px"}
      />
      <Image
        alt="Blockwall"
        src="/icons/investors-blockwall.svg"
        minW={"150px"}
      />
    </SimpleGrid>
  </Center>
);

export default Investors;
