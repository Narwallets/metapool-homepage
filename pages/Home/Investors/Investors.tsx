import type { NextPage } from "next";
import { Text, SimpleGrid, Image, Heading, Center } from "@chakra-ui/react";

const Investors: NextPage = () => (
  <section id="investors">
    <Center flexDirection={"column"} px="2rem" py="9rem">
      <Text
        color="secondary"
        fontFamily={"Inter"}
        letterSpacing="0.6px"
        fontWeight="semibold"
      >
        INVESTORS
      </Text>
      <Heading
        size="2xl"
        pt={["15px", "15px"]}
        pb={["2rem", "7rem"]}
        fontFamily="'Meta Space', 'Space Grotesk'"
      >
        Backed by great people
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3, xl: 6 }}
        mx={{ base: "1rem", md: "3rem", lg: "3rem" }}
        alignItems={"center"}
        justifyContent="center"
        spacing={10}
      >
        <Image
          alt="DragonFly"
          src="investors/dragonfly.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image alt="Palmera" src="investors/palmera_crypto.svg" h={"120px"} />
        <Image
          alt="IOSG"
          src="investors/iosg_ventures.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="ATT"
          src="investors/att.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="Move"
          src="investors/move.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="SVC"
          src="investors/svc.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="DI"
          src="investors/di.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="Blockwall"
          src="investors/blockwall.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="Warburg"
          src="investors/warburg_serres.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />

        <Image
          alt="Big Brain Holdings"
          src="investors/big_brain_holdings.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
        <Image
          alt="Darma Capital"
          src="investors/darma.svg"
          h={{ base: "150px", md: "100px" }}
          mx="auto"
        />
      </SimpleGrid>
    </Center>
  </section>
);

export default Investors;
