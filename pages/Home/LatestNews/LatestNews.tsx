import type { NextPage } from "next";
import {
  Box,
  Container,
  Text,
  HStack,
  Link,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Post from "./Post";
import useSmoothScrollTo from "../../../hooks/useSmoothScrollTo";

interface Props {
  news: {
    title: string;
    creator: string;
    link: string;
    content: string;
    category: string;
    image: string;
  }[];
}

const LatestNews: NextPage<Props> = ({ news }) => (
  <>
    <a id="#latest-news" {...useSmoothScrollTo("#latest-news")} />
    <Box bgColor={"#F9FAFB"} px="1rem">
      <Container
        maxW="container.xl"
        py={{ base: "5rem", md: "5rem" }}
        textAlign="center"
      >
        <Heading
          size="3xl"
          pt={["15px", "15px"]}
          noOfLines={[2, 2]}
          fontFamily="'Meta Space', 'Space Grotesk'"
          lineHeight="56px"
        >
          Latest News from our Blog
        </Heading>
        {/* <Text
      color="secondary"
      fontFamily={"Inter"}
      letterSpacing="0.6px"
      fontWeight="semibold"
      pt={["43px", "43px"]}
    >
      Get the latest news from ourLorem ipsum dolor sit amet consectetur, <br />
      adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
    </Text> */}
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={10}
          my="100px"
          alignItems="flex-start"
        >
          {news.map((post) => (
            <Post
              key={post.title}
              tag={post.category}
              title={post.title}
              author={post.creator}
              cover={post.image}
              link={post.link}
            />
          ))}
        </SimpleGrid>
        <Link
          variant="outlined"
          target={`_blank`}
          href="https://blog.metapool.app"
          whiteSpace="nowrap"
          borderWidth="2px"
          fontSize={{ base: "xs", lg: "lg" }}
          isExternal
        >
          Read more in the Meta Pool Blog
        </Link>
      </Container>
    </Box>
  </>
);

export default LatestNews;
