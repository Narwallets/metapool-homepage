import type { NextPage } from "next";
import {
  Box,
  Text,
  Image,
  Stack,
  Heading,
  Spacer,
  Flex,
} from "@chakra-ui/react";

interface Props {
  tag: string;
  title: string;
  description: string;
  author: string;
  duration: string;
  cover: string;
}

const Post: NextPage<Props> = ({
  tag,
  title,
  description,
  author,
  duration,
  cover,
}) => (
  <Flex
  flexDirection={"column"}
    maxW={"384px"}
    w={"full"}
    minH="500px"
    bg={"white"}
    boxShadow={"2xl"}
    rounded={"md"}
    p={6}
    overflow={"hidden"}
    mx="auto"
  >
    <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
      <Image src={cover} alt={title} layout={"fill"} />
    </Box>
    <Stack textAlign={"left"}>
      <Text
        color={"gray.500"}
        textTransform={"uppercase"}
        fontWeight={800}
        fontSize={"sm"}
        letterSpacing={1.1}
      >
        {tag}
      </Text>
      <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
        {title}
      </Heading>
      <Text color={"gray.500"}>{description}</Text>
    </Stack>
    <Spacer />
    <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
      <Text>{author}</Text>
      <Spacer />
      <Text color={"gray.500"}>{duration} read</Text>
    </Stack>
  </Flex>
);

export default Post;
