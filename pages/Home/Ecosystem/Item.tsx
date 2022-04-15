import type { NextPage } from "next";
import { Box, Text, HStack, Image, Tag, Circle, Flex } from "@chakra-ui/react";

interface Props {
  title: string;
  description?: string;
  icon?: string;
  type?: string;
  env?: string;
  soon?: boolean;
}

const Item: NextPage<Props> = ({ title, description, icon, type, env, soon }) => (
  <Box
    maxW={[null, "500px"]}
    bg="white"
    rounded="lg"
    p="10"
    border={"2px"}
    borderColor="#E2E8F0"
  >
    <HStack w="100%" justifyContent={"space-between"} px="20px">
      {icon && <Image src={icon} alt="Near" mr="2rem" />}
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
          </Flex>
        )}
        {description && <Text>{description}</Text>}
      </Box>
    </HStack>
  </Box>
);

export default Item;
