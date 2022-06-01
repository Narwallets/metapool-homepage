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
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

const Security: NextPage = () => (
  <>
    <a id="#security" {...useSmoothScrollTo("#security")} />
    <Container maxW="container.xl">
      <Box
        px={{ base: "3rem", lg: "10rem" }}
        py="5rem"
        rounded={"32px"}
        bg={["url('bg-security.svg') no-repeat #F1F5F9"]}
        bgPosition={{ base: "center center", lg: "center right" }}
        my={["4rem", "9rem"]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mx={{ base: "1rem", lg: "auto" }}
        w="full"
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
            fontFamily="'Meta Space', 'Space Grotesk'"
          >
            Trust issues?
            <br />
            We are audited.
          </Heading>
          <Text fontFamily="Inter">
            Security is our top priority. All our code is reviewed and audited
            by top security firms in the industry.
          </Text>
          <br />

          <Image alt="Blocksec" src="/icons/blocksec.svg" />
          <Box mt="40px">
            <Link
              variant="solid"
              href="https://metapool.gitbook.io/master/litepaper-1/risks"
              isExternal
              whiteSpace="nowrap"
            >
              Read Audit Report
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  </>
);

export default Security;
