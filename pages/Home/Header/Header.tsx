import type { NextPage } from "next";
import { Image, Flex, Link } from "@chakra-ui/react";
const Hero: NextPage = () => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      py="2rem"
      px={{ base: "2rem", sm: "1rem", lg: "4rem" }}
    >
      <Image alt="logo" src={"logo.svg"} w="202" h="34" />
      <Link
        colorScheme="primary"
        variant="outlined"
        borderWidth="2px"
        href="https://metapool.app/dapp/mainnet/meta/"
        display={{ base: "none", md: "initial" }}
      >
        Connect Wallet
      </Link>
    </Flex>
  );
};

export default Hero;
