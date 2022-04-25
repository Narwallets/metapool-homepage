import type { NextPage } from "next";
import {
  Container,
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Spacer,
  Link,
  Heading,
} from "@chakra-ui/react";
import Platform from "./Platform";

const Comunity: NextPage = () => (
  <Flex
    pt={"8rem"}
    fontSize="md"
    position="relative"
    justifyContent="center"
    bg={"url(/bg-comunity.svg) no-repeat"}
    bgSize="contain"
  >
    <Container
      maxW="container.xl"
      pb={{ base: "5rem", lg: "10rem" }}
      px={{ base: "1rem", lg: "10rem" }}
    >
      <Box textAlign="left" w="full">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="0.6px"
          fontWeight="semibold"
        >
          COMMUNITY
        </Text>
        <Heading
          size="2xl"
          pt={"15px"}
          pb={"43px"}
          fontFamily="'Meta Space', 'Space Grotesk'"
        >
          Join the community
        </Heading>
        <Box pb={"76px"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Text>
              Chat with 7000+ members and get help with your projects on
              Discord.
            </Text>
            <Spacer />
            <Link
              variant="outlined"
              href="#"
              whiteSpace="nowrap"
              borderWidth="2px"
              textAlign={"center"}
              maxW="sm"
            >
              Join Discord
            </Link>
          </Stack>
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, md: 10 }}>
        <Platform
          name="Telegram"
          description="Join the community"
          icon="/icons/comunity-telegram.svg"
          href="#"
        />
        <Platform
          name="Twitter"
          description="Follow @meta_pool"
          icon="/icons/comunity-twitter.svg"
          href="https://twitter.com/meta_pool"
        />
        <Platform
          name="Discord"
          description="Ask questions"
          icon="/icons/comunity-discord.svg"
          href="https://discord.com/invite/tG4XJzRtdQ"
        />
        <Platform
          name="Gitbook"
          description="Learn about Meta Pool"
          icon="/icons/comunity-gitbook.svg"
          href="#"
        />
        <Platform
          name="Medium"
          description="Keep updated"
          icon="/icons/comunity-medium.svg"
          href="https://medium.com/@meta_pool"
        />
        <Platform
          name="YouTube"
          description="Watch our channel"
          icon="/icons/comunity-youtube.svg"
          href="#"
        />
      </SimpleGrid>
    </Container>
  </Flex>
);

export default Comunity;
