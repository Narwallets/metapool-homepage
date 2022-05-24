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
import NumberFormat from "react-number-format";

interface Props {
  apy: any;
  title: string;
  description: string;
  icon: string;
  url: string;
}

const Item: NextPage<Props> = ({ apy, title, description, icon, url }) => (
  <Square bg="white" rounded="2xl" boxShadow="2xl" p="10">
    <VStack h="full" mx="auto">
      <HStack w="100%" justifyContent={"space-between"} px={["0px", "0px"]}>
        <Image alt="Oct" src={icon} />
        <Box>
          <Text textStyle="h3">
            {apy ? (
              <NumberFormat
                value={apy}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"%"}
                decimalScale={2}
              />
            ) : (
              "-"
            )}
          </Text>
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
        href={url}
        mb="52px"
        whiteSpace={"nowrap"}
        isExternal
      >
        Stake now
      </Link>
    </VStack>
  </Square>
);

export default Item;
