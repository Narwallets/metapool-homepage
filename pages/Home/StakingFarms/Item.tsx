import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Square,
  VStack,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";

interface Props {
  apy: string;
  title: string;
  description: string;
  icon: string;
}

const Item: NextPage<Props> = ({ apy, title, description, icon }) => (
  <Square size="full" bg="white" rounded="2xl" boxShadow="2xl" p="10">
    <VStack h="full" mx="auto">
      <HStack w="100%" justifyContent={"space-between"} px={["0px", "0px"]}>
        <Image alt="Oct" src={icon} />
        <Box>
          <Text textStyle="h3">{apy}</Text>
          <Text>APY</Text>
        </Box>
      </HStack>
      <Flex
        h="full"
        direction={"column"}
        justifyContent="flex-start"
        alignItems={"flex-start"}
        textAlign={"left"}
        pt="30px"
      >
        <Box textStyle="h5">{title}</Box>
        <Text noOfLines={[2, 2, 2]}>{description}</Text>
      </Flex>
      <Button variant="solid" mb="52px">
        Stake now
      </Button>
    </VStack>
  </Square>
);

export default Item;
