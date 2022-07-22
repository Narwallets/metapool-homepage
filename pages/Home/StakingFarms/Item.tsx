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
  Stack,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

interface Props {
  apy?: any;
  title: string;
  description: string;
  icon: string;
  url: string;
  ctaLabel: string;
}

const Item: NextPage<Props> = ({
  apy,
  title,
  description,
  icon,
  url,
  ctaLabel,
}) => (
  <Box bg="white" rounded="2xl" boxShadow="2xl" p="10">
    <VStack mx="auto" spacing="1rem">
      <Stack
        direction={{ base: "row", lg: "row" }}
        w="100%"
        justifyContent={"space-between"}
        spacing="1rem"
      >
        <Image alt="Oct" src={icon} maxH="60px" />
        {apy && (
          <Flex
            direction={{ base: "column", lg: "column" }}
            alignItems={"flex-start"}
          >
            <Text
              textStyle="h3"
              fontSize="4xl"
              fontWeight={"900"}
              my="0"
              lineHeight={"1"}
            >
              <NumberFormat
                value={apy}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"~"}
                suffix={"%"}
                decimalScale={2}
              />
            </Text>
            <Text fontSize="sm" fontWeight={"700"}>
              APY
            </Text>
          </Flex>
        )}

        <Link
          variant="solid"
          href={url}
          whiteSpace={"nowrap"}
          isExternal
          minW={{ base: "200px", lg: "170px" }}
          display={{ base: "none", lg: "block" }}
        >
          {ctaLabel}
        </Link>
      </Stack>
      <Flex
        direction={"column"}
        justifyContent="flex-start"
        alignItems={"flex-start"}
        textAlign={"left"}
      >
        <Heading size="sm" fontFamily="Inter" fontWeight={"900"} my="2">
          {title}
        </Heading>
        <Text fontFamily="Inter">{description}</Text>
      </Flex>
      <Link
        variant="solid"
        href={url}
        whiteSpace={"nowrap"}
        isExternal
        minW={{ base: "200px", lg: "170px" }}
        display={{ base: "block", lg: "none" }}
      >
        {ctaLabel}
      </Link>
    </VStack>
  </Box>
);

export default Item;
