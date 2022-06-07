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
        px={{ base: "3rem", sm: "10rem" }}
        py="5rem"
        rounded={"32px"}
        bgImage={{
          base: `url('bg-security-mobile.svg')`,
          sm: `url('bg-security.svg')`,
        }}
        bgRepeat="no-repeat"
        bgColor="#F1F5F9"
        bgSize={{ base: "contain", sm: "contain", md: "auto" }}
        bgPosition={{ base: "bottom center", sm: "center right" }}
        my={["4rem", "9rem"]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        w="full"
      >
        <Box
          textAlign="left"
          w="full"
          mr={{ base: 0, md: "50%" }}
          pt={["0"]}
          mb={{ base: "20rem", lg: 0 }}
        >
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
            pb={["3rem", "43px"]}
            lineHeight={"110%"}
            fontFamily="'Meta Space', 'Space Grotesk'"
          >
            Trust issues?
            <br />
            We are audited.
          </Heading>
          <Text fontFamily="Inter" pr={{ base: "auto", sm: "50%" }}>
            Security is our top priority. All our code is reviewed and audited
            by top security firms in the industry.
          </Text>
          <br />

          <Image
            mx={{ base: "auto", sm: "0" }}
            alt="Blocksec"
            src="icons/blocksec.svg"
          />
          <Box
            mt="40px"
            mx={{ base: "auto", sm: "0" }}
            textAlign={{ base: "center", sm: "left" }}
          >
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
