import type { NextPage } from "next";
import {
  Box,
  Container,
  Text,
  HStack,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import Post from "./Post";

const LatestNews: NextPage = () => (
  <Container maxW="container.xl" py="100px" textAlign="center">
    <Box
      textStyle="h2"
      pt={["15px", "15px"]}
      pb={["43px", "43px"]}
      noOfLines={[2, 2]}
      fontFamily="Inter"
      lineHeight="56px"
    >
      Latest news
    </Box>
    <Text
      color="secondary"
      fontFamily={"Inter"}
      letterSpacing="wider"
      fontWeight="semibold"
    >
      Lorem ipsum dolor sit amet consectetur, <br />
      adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
    </Text>
    <SimpleGrid
      columns={[1, 3]}
      spacing={10}
      my="100px"
      alignItems="flex-start"
    >
      <Post
        tag="AURORA"
        title="Stake NEAR with Meta Pool from Aurora using Metamask"
        description="We are happy to announce that this feature is now live and users are
        able to stake..."
        author="Claudio Cossio"
        duration="6min"
        cover="/medium/1.svg"
      />
      <Post
        tag="DEFI"
        title="Meta Pool and NEAR DeFi on Twitter Spaces"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo..."
        author="Claudio Cossio"
        duration="3min"
        cover="/medium/2.svg"
      />
      <Post
        tag="LENDING"
        title="Aurigame now lists stNEAR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo..."
        author="Claudio Cossio"
        duration="3min"
        cover="/medium/3.svg"
      />
    </SimpleGrid>
    <HStack
      mt={["50px", "50px"]}
      spacing={["0px", "20px"]}
      justifyContent="center"
    >
      <Link variant="outlined" href="#" whiteSpace="nowrap" borderWidth="2px">
        Read more news on Medium
      </Link>
    </HStack>
  </Container>
);

export default LatestNews;
