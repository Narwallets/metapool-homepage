import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <Box bg={"primary"} color={"white"} fontFamily="Inter">
      <Container as={Stack} maxW={"full"} p={10}>
        <SimpleGrid
          templateColumns={["2fr", "2fr 1fr 1fr 1fr 1fr"]}
          spacing={8}
        >
          <Newsletter />
          <Stack align={"flex-start"}>
            <Text pb="10px" fontWeight={"semibold"}>
              Learn
            </Text>
            <Link
              href="https://metapool.gitbook.io/master/"
              color="white"
              py="0px"
              px={0}
            >
              Gitbook
            </Link>
            <Link
              py="0px"
              href={
                "https://metapool.app/Tokenomics_Governance_-_Meta_Pool_v6.pdf"
              }
              px={0}
            >
              Tokenomics
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text pb="10px" fontWeight={"semibold"}>
              Resources
            </Text>
            <Link p="0px" href={"https://blog.metapool.app"}>
              Meta Pool Blog
            </Link>
            <Link p="0px" href={"#"}>
              FAQ
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text pb="10px" fontWeight={"semibold"}>
              Community
            </Text>
            <Link href="https://twitter.com/meta_pool" p="0px">
              Twitter
            </Link>
            <Link p="0px" href="https://t.me/MetaPoolOfficialChannel">
              Telegram
            </Link>
            <Link p="0px" href={"https://github.com/Narwallets/meta-pool"}>
              Github
            </Link>
            <Link
              p="0px"
              href={"https://www.youtube.com/channel/UCftgX55OpiouK8pmHydVT-g"}
            >
              YouTube
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Link href="https://metapool.gitbook.io/master/contact-us" pb="10px" fontWeight={"semibold"}>
              Contact
            </Link>
            <Link p="0px" href={"https://metapool.gitbook.io/master/"}>
              About us
            </Link>
            <Link p="0px" href={"https://discord.gg/znPg3dsTzM"}>
              Support
            </Link>
            {/* <Link p="0px" href={"#"}>
              Help Center
            </Link> */}
            <Link p="0px" href={"https://airtable.com/shru3vdm0kJzFXXZC"}>
              Careers
            </Link>
          </Stack>
        </SimpleGrid>
        <Stack direction={["column", "row"]} spacing={6} pt="6rem">
          <Text fontSize={"sm"} w="full">
            © 2022 Meta Pool by Narwallets
          </Text>
          {/* <Text fontSize={"sm"} whiteSpace="nowrap">
            Privacy
          </Text>
          <Text fontSize={"sm"} whiteSpace="nowrap">
            Terms and Conditions
          </Text> */}
          <Link
            href="/legal-notice-risk-disclosures"
            fontSize={"sm"}
            whiteSpace="nowrap"
            p="0"
          >
            Legal Notice &amp; Risk Disclosures
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;