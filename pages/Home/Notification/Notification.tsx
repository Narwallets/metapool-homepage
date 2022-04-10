import type { NextPage } from "next";
import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Notification: NextPage = () => (
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
      This is a news update that worth to pay attention and maybe click on it
    </Box>
    <Box>
      <Image src="/icons/close.svg" alt="close" width="20px" height="20px" />
    </Box>
  </Flex>
);

export default Notification;
