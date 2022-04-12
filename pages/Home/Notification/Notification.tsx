import type { NextPage } from "next";
import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Notification: NextPage = () => (
  <Flex
    w="100%"
    bg="white"
    p="17px"
    px="40px"
    fontWeight="semibold"
    fontSize="md"
    position="relative"
    justifyContent="center"
  >
    <Text noOfLines={[2, 1]}>
      This is a news update that worth to pay attention and maybe click on it
    </Text>
    <Box position="absolute" right="20px" top="50%" marginTop="-9px">
      <Image src="/icons/close.svg" alt="close" width="17px" height="17px" />
    </Box>
  </Flex>
);

export default Notification;
