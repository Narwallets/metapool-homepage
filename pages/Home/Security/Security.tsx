import type { NextPage } from "next";
import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";

const Security: NextPage = () => (
  <Container
    maxW="container.xl"
    px={["3rem", "10rem"]}
    py={["3rem", "3rem"]}
    rounded={"32px"}
    bg={["url('bg-security.svg') no-repeat #F1F5F9"]}
    bgPosition={["center center", "center right"]}
    my={["50px", "150px"]}
    display="flex"
    flexDirection="column"
    justifyContent="center"
  >
    <Box textAlign="left" w="full" mr="50%" pt={["0"]} mb={"0"}>
      <Text
        color="secondary"
        fontFamily={"Inter"}
        letterSpacing="wider"
        fontWeight="semibold"
      >
        SECURITY
      </Text>
      <Text
        textStyle={["h2", "h2"]}
        pt={["15px", "15px"]}
        pb={["0px", "43px"]}
        lineHeight={"110%"}
      >
        Trust issues?
        <br />
        We are audited.
      </Text>
      <Text noOfLines={[3, 3]} w="50%">
        NEAR protocol delivers unparalleled speed, security, and reliability.
        Enjoy almost instant transactions and extremely low fees.
      </Text>
      <br />

      <Image alt="Farming" src="/icons/blocksec.svg" />
      <Box mt="40px">
        <Link
          variant="solid"
          href="https://medium.com/meta-pool/meta-pools-smart-contract-audit-by-blocksec-5c4f0c8039a2"
          isExternal={true}
        >
          See live audit
        </Link>
      </Box>
    </Box>
  </Container>
);

export default Security;
