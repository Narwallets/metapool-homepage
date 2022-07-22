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
  <section id="community">
    <Flex
      pt={"8rem"}
      fontSize="md"
      position="relative"
      justifyContent="center"
      bg={"url(images/bg-comunity.svg) no-repeat"}
      bgSize="contain"
      bgColor="#F1F5F9"
      px="1rem"
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
                Discover our social media and interact with more than 13.000+
                members and get help in our Discord.
              </Text>
              <Spacer />
              <Link
                variant="outlined"
                href="https://discord.com/invite/tG4XJzRtdQ"
                whiteSpace="nowrap"
                borderWidth="2px"
                textAlign={"center"}
                maxW="sm"
                isExternal
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
            icon="icons/comunity-telegram.svg"
            href="https://t.me/MetaPoolOfficialGroup"
          />
          <Platform
            name="Twitter"
            description="Follow @meta_pool"
            icon="icons/comunity-twitter.svg"
            href="https://twitter.com/meta_pool"
          />
          <Platform
            name="Discord"
            description="Ask questions"
            icon="icons/comunity-discord.svg"
            href="https://discord.com/invite/tG4XJzRtdQ"
          />
          <Platform
            name="Gitbook"
            description="Learn about Meta Pool"
            icon="icons/comunity-gitbook.svg"
            href="https://metapool.gitbook.io/master/"
          />
          <Platform
            name="Meta Pool Blog"
            description="Keep updated"
            icon=""
            href="https://blog.metapool.app"
          />
          <Platform
            name="YouTube"
            description="Watch our channel"
            icon="icons/comunity-youtube.svg"
            href="https://www.youtube.com/channel/UCftgX55OpiouK8pmHydVT-g"
          />
        </SimpleGrid>
      </Container>
    </Flex>
  </section>
);

export default Comunity;
