import type { NextPage } from "next";
import {
  Box,
  Text,
  Image,
  Tag,
  Circle,
  Flex,
  Stack,
} from "@chakra-ui/react";

interface Props {
  title: string;
  description?: string;
  icon?: string;
  type?: string;
  env?: string;
  soon?: boolean;
}

const Item: NextPage<Props> = ({
  title,
  description,
  icon,
  type,
  env,
  soon,
}) => (
  <Box
    maxW={["full", "500px"]}
    bg="white"
    rounded="lg"
    p={["1rem", "2rem"]}
    border={"2px"}
    borderColor="#E2E8F0"
    mx="auto"
    w="full"
  >
    <Stack
      direction={{ base: "column", lg: "row" }}
      w="100%"
      justifyContent={"space-between"}
      px="0"
    >
      {icon && (
        <Image
          src={icon}
          alt="Near"
          mr="2rem"
          maxWidth={["150px", null]}
          mx={["auto", "initial"]}
        />
      )}
      <Box>
        <Tag
          fontFamily={["Inter"]}
          fontSize="10px"
          fontWeight={"semibold"}
          bg="#F1F5F9"
          borderRadius={"4px"}
          mb="32px"
        >
          {type}
        </Tag>
        {title && (
          <Flex textStyle="h5" fontFamily={"Inter"}>
            {title}{" "}
            {env === "mainnet" && (
              <Circle size="8px" bgColor="#10B981" mx="4px" />
            )}
            {env === "testnet" && (
              <Circle size="8px" bgColor="#F97316" mx="4px" />
            )}
            {soon && (
              <Tag
                textColor={"white"}
                fontFamily={["Inter"]}
                fontSize="10px"
                fontWeight={"semibold"}
                bg="#F59E0B"
                borderRadius={"2px"}
                mx="4px"
              >
                Soon!
              </Tag>
            )}
          </Flex>
        )}
        {description && <Text>{description}</Text>}
      </Box>
    </Stack>
  </Box>
);

export default Item;
