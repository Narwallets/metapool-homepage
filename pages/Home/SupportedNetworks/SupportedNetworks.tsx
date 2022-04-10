import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";

const SupportedNetworks: NextPage = () => (
  <Flex
    w="100%"
    bg="white"
    p="17px"
    fontWeight="semibold"
    fontSize="md"
    position="relative"
    justifyContent="center"
  >
    <Box>
      Supported Networks (TBD)
    </Box>
  </Flex>
);

export default SupportedNetworks;
