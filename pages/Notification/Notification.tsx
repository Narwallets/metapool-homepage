import type { NextPage } from "next";
import { Center } from "@chakra-ui/react";

const Notification: NextPage = () => {
  return (
    <Center w="100%" bg="white" p="17px" fontWeight="semibold" fontSize="md">
      This is a news update that worth to pay attention and maybe click on it
    </Center>
  );
};

export default Notification;
