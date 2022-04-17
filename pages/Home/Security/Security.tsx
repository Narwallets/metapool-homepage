import type { NextPage } from "next";
import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";

const Security: NextPage = () => (
  <Container
    maxW="container.xl"
    px={["3rem", "10rem"]}
    bgColor="#F1F5F9"
    rounded={"32px"}
    bg="url('bg-security.svg') center right no-repeat"
    h="560px"
    my={["50px", "150px"]}
  >
    <Flex pt={["50px"]} mb={"50px"} fontSize="md" justifyContent="center">
      <Box textAlign="left" w="full" mr="50%">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="wider"
          fontWeight="semibold"
        >
          SECURITY
        </Text>
        <Box
          textStyle={["h2", "h2"]}
          pt={["15px", "15px"]}
          pb={["0px", "43px"]}
          lineHeight={"110%"}
        >
          Trust issues?
          <br />
          We are audited.
        </Box>
        <Box noOfLines={[3, 3]}>
          NEAR protocol delivers unparalleled speed, security, and reliability.
          Enjoy almost instant transactions and extremely low fees.
        </Box>
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
    </Flex>
  </Container>
);

export default Security;
