import type { NextPage } from "next";
import { Text, SimpleGrid, Image, Heading, Center } from "@chakra-ui/react";
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

const Investors: NextPage = () => (
  <>
    <a id="#investors" {...useSmoothScrollTo("#investors")} />
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
        <Image alt="DragonFly" src="investors/dragonfly.svg" minW={"150px"} />
        <Image
          alt="Palmera"
          src="investors/palmera_crypto.svg"
          minW={"150px"}
        />
        <Image alt="IOSG" src="investors/iosg_ventures.svg" minW={"150px"} />
        <Image alt="ATT" src="investors/att.svg" minW={"150px"} />
        <Image alt="Move" src="investors/move.svg" minW={"150px"} />
        <Image alt="SVC" src="investors/svc.svg" minW={"150px"} />
        <Image alt="DI" src="investors/di.svg" minW={"150px"} />
        <Image alt="Blockwall" src="investors/blockwall.svg" minW={"150px"} />
        <Image
          alt="Warburg"
          src="investors/warburg_serres.svg"
          minW={"150px"}
        />

        <Image
          alt="Big Brain Holdings"
          src="investors/big_brain_holdings.svg"
          minW={"150px"}
        />
      </SimpleGrid>
    </Center>
  </>
);

export default Investors;
