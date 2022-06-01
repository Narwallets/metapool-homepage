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
  apy?: any;
  title: string;
  description: string;
  icon: string;
  url: string;
  ctaLabel: string;
  disclamer?: string;
}

const Item: NextPage<Props> = ({
  apy,
  title,
  description,
  icon,
  url,
  ctaLabel,
  disclamer = false,
}) => (
  <Box bg="white" rounded="2xl" boxShadow="2xl" p="10">
    <VStack mx="auto" spacing="1rem">
      <HStack
        w="100%"
        justifyContent={"space-between"}
        spacing="1rem"
        minH="4rem"
      >
        <Image alt="Oct" src={icon} />
        {apy && (
          <Box>
            <Text textStyle="h3" fontSize="3xl">
              <NumberFormat
                value={apy}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"%"}
                decimalScale={2}
              />
            </Text>
            <Text>APY</Text>
          </Box>
        )}
      </HStack>
      <Flex
        direction={"column"}
        justifyContent="flex-start"
        alignItems={"flex-start"}
        textAlign={"left"}
        pt="30px"
        minH="11rem"
      >
        <Heading size="sm" fontFamily="Inter">
          {title}
        </Heading>
        <Text fontFamily="Inter">{description}</Text>
      </Flex>
      <Link
        variant="solid"
        href={url}
        mb="52px"
        whiteSpace={"nowrap"}
        isExternal
      >
        {ctaLabel}
      </Link>
      {disclamer && (
        <Text fontSize="xs" color="#94A3B8" pt="2rem">
          * {disclamer}
        </Text>
      )}
    </VStack>
  </Box>
);

export default Item;
