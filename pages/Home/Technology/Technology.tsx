import type { NextPage } from "next";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Technology: NextPage = () => (
  <Box bgColor="#1E293B" textColor={"white"}>
    <Container maxW="container.2xl" pb="10rem" px={["3rem", "10rem"]}>
      <Flex
        pt={["50px"]}
        fontSize="md"
        position="relative"
        justifyContent="center"
      >
        <Box textAlign="left" w="full">
          <Text
            color="secondary"
            fontFamily={"Inter"}
            letterSpacing="wider"
            fontWeight="semibold"
          >
            TECHNOLOGY
          </Text>
          <Box
            textStyle="h1"
            pt={["15px", "15px"]}
            pb={["43px", "43px"]}
            lineHeight={"110%"}
          >
            Meta Pool,
            <br />
            superior staking
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export default Technology;
