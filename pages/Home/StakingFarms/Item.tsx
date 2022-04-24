import type { NextPage } from "next";
import {
  Box,
  Text,
  Flex,
  Square,
  VStack,
  HStack,
  Link,
  Image,
  Heading,
} from "@chakra-ui/react";

interface Props {
  apy: string;
  title: string;
  description: string;
  icon: string;
}

const Item: NextPage<Props> = ({ apy, title, description, icon }) => (
  <Square bg="white" rounded="2xl" boxShadow="2xl" p="10">
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
        <Heading size="sm" fontFamily="Inter">
          {title}
        </Heading>
        <Text noOfLines={{ base: 2 }} fontFamily="Inter">
          {description}
        </Text>
      </Flex>
      <Link
        variant="solid"
        href="https://metapool.app/dapp/mainnet/meta/"
        mb="52px"
        whiteSpace={"nowrap"}
      >
        Stake now
      </Link>
    </VStack>
  </Square>
);

export default Item;
