import type { NextPage } from "next";
import {
  Box,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const Item: NextPage<Props> = ({ title, description, icon }) => (
  <Box
    maxW={[null, "500px"]}
    bg="white"
    rounded="lg"
    p="10"
    border={"2px"}
    borderColor="#E2E8F0"
  >
    <HStack w="100%" justifyContent={"space-between"} px="20px">
      <Image src={icon} alt="Near" />
      <Box>
        <Box textStyle="h5" fontFamily={"Inter"}>{title}</Box>
        <Text>{description}</Text>
      </Box>
    </HStack>
  </Box>
);

export default Item;
