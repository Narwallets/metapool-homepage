import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const Security: NextPage = () => (
  <Container maxW="container.xl">
    <Box
      px={{ base: "3rem", lg: "10rem" }}
      py={{ base: "3rem", lg: "3rem" }}
      rounded={"32px"}
      bg={["url('bg-security.svg') no-repeat #F1F5F9"]}
      bgPosition={{ base: "center center", lg: "center right" }}
      my={["4rem", "9rem"]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mx={{ base: "1rem", lg: "auto" }}
      w="fit-content"
    >
      <Box textAlign="left" w="full" mr="50%" pt={["0"]} mb={"0"}>
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="0.6px"
          fontWeight="semibold"
        >
          SECURITY
        </Text>
        <Heading
          size="2xl"
          pt={["15px", "15px"]}
          pb={["0px", "43px"]}
          lineHeight={"110%"}
          fontFamily="Space Grotesk"
        >
          Trust issues?
          <br />
          We are audited.
        </Heading>
        <Text noOfLines={[3, 3]} w="50%" fontFamily="Inter">
          NEAR protocol delivers unparalleled speed, security, and reliability.
          Enjoy almost instant transactions and extremely low fees.
        </Text>
        <br />

        <Image alt="Blocksec" src="/icons/blocksec.svg" />
        <Box mt="40px">
          <Link
            variant="solid"
            href="https://medium.com/meta-pool/meta-pools-smart-contract-audit-by-blocksec-5c4f0c8039a2"
            isExternal={true}
            whiteSpace="nowrap"
          >
            See live audit
          </Link>
        </Box>
      </Box>
    </Box>
  </Container>
);

export default Security;
