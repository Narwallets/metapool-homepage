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
} from "@chakra-ui/react";
import Platform from "./Platform";

const Comunity: NextPage = () => (
  <Flex
    pt={["50px"]}
    fontSize="md"
    position="relative"
    justifyContent="center"
    bg={"url(/bg-comunity.svg) no-repeat"}
    bgSize="contain"
  >
    <Container maxW="container.2xl" pb="10rem" px={["3rem", "10rem"]}>
      <Box textAlign="left" w="full">
        <Text
          color="secondary"
          fontFamily={"Inter"}
          letterSpacing="wider"
          fontWeight="semibold"
        >
          COMMUNITY
        </Text>
        <Box textStyle={["h3", "h2"]} pt={["15px", "15px"]} pb={["43px", "43px"]}>
          Join the community
        </Box>
        <Box pb={["76px", "76px"]}>
          <Stack direction={["column", "row"]}>
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
            >
              Join Discord
            </Link>
          </Stack>
        </Box>
      </Box>
      <SimpleGrid columns={[1, 3]} spacing={[2, 10]}>
        <Platform
          name="Telegram"
          description="Join the community"
          icon="/icons/comunity-telegram.svg"
        />
        <Platform
          name="Twitter"
          description="Follow @meta_pool"
          icon="/icons/comunity-twitter.svg"
        />
        <Platform
          name="Discord"
          description="Ask questions"
          icon="/icons/comunity-discord.svg"
        />
        <Platform
          name="Gitbook"
          description="Learn about Meta Pool"
          icon="/icons/comunity-gitbook.svg"
        />
        <Platform
          name="Medium"
          description="Keep updated"
          icon="/icons/comunity-medium.svg"
        />
        <Platform
          name="YouTube"
          description="Watch our channel"
          icon="/icons/comunity-youtube.svg"
        />
      </SimpleGrid>
    </Container>
  </Flex>
);

export default Comunity;
