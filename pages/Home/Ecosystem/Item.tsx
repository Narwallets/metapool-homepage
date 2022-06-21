import type { NextPage } from "next";
import { Box, Text, Image, Tag, Circle, Flex, Stack } from "@chakra-ui/react";

interface Props {
  title: string;
  description?: string;
  icon?: string;
  tags: string[];
  env?: string;
}

const Item: NextPage<Props> = ({ title, description, icon, tags, env }) => (
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
      direction={"row"}
      spacing="2rem"
      w="100%"
      justifyContent={"space-between"}
      alignItems="flex-start"
      px="0"
    >
      {icon && (
        <Image
          src={icon}
          alt="NEAR"
          mr="2rem"
          maxWidth={["150px", null]}
          mx={["auto", "initial"]}
          mt="0rem"
        />
      )}
      <Box flexGrow={1}>
        {tags.map((tag) => (
          <Tag
            key={`tag-${tag}`}
            fontFamily={"Inter"}
            fontSize="10px"
            fontWeight={"semibold"}
            bg="#F1F5F9"
            borderRadius={"4px"}
            mb="32px"
            mr="8px"
          >
            {tag}
          </Tag>
        ))}

        {title && (
          <Flex textStyle="h5" fontFamily={"Inter"}>
            {title}{" "}
            {env === "mainnet" && (
              <Circle size="8px" bgColor="#10B981" mx="4px" />
            )}
            {env === "testnet" && (
              <Circle size="8px" bgColor="#F97316" mx="4px" />
            )}
          </Flex>
        )}
        {description && <Text>{description}</Text>}
      </Box>
    </Stack>
  </Box>
);

export default Item;
