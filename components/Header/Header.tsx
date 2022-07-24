import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LINKS = [
  { title: "STAKE NEAR", anchor: "#top", offset: 0 },
  { title: "STAKING AND FARMS", anchor: "#staking-farms", offset: 0 },
  { title: "STNEAR ECOSYSTEM", anchor: "#ecosystem", offset: 0 },
  { title: "HOW IT WORKS", anchor: "#how-it-works", offset: 0 },
  { title: "TECHNOLOGY", anchor: "#technology", offset: 0 },
  { title: "BENEFITS", anchor: "#benefits", offset: 0 },
  { title: "SECURITY", anchor: "#security", offset: 200 },
  { title: "INVESTORS", anchor: "#investors", offset: 0 },
  { title: "LATEST NEWS", anchor: "#latest-news", offset: 60 },
  { title: "COMMUNITY", anchor: "#community", offset: 50 },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollFun = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, []);

  return (
    <section id="top">
      <Box
        bg={"white"}
        boxShadow={scrolled ? "md" : "none"}
        position="fixed"
        zIndex="101"
        w="full"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={"2rem"}
          my="1rem"
        >
          <Link m={0} p={0} href="/">
            <Image m={0} p={0} alt="logo" src={"/images/logo.svg"} h={"24px"} />
          </Link>
          <Flex alignItems={"center"}>
            <IconButton
              variant={"none"}
              bgColor="transparent"
              color="black"
              icon={
                isOpen ? (
                  <CloseIcon
                    w={{ base: "initial", md: "100px" }}
                    h="20px"
                    outline="none"
                  />
                ) : (
                  <Image
                    w={{ base: "initial", md: "100px" }}
                    h="18px"
                    alt="logo"
                    src={"/icons/burger.svg"}
                  />
                )
              }
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
              boxShadow="0"
              outline={"none"}
              sx={{ hover: { boxShadow: "0" }, focus: { boxShadow: "0" } }}
            />
            <Link
              colorScheme="primary"
              variant="outlined"
              borderWidth="2px"
              href="https://metapool.app/dapp/mainnet/meta/"
              display={{ base: "none", md: "initial" }}
            >
              Start staking
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            position="fixed"
            top="96px"
            left="0px"
            bgColor="white"
            w="full"
            boxShadow={"md"}
          >
            <Stack as={"nav"} spacing={4} textAlign="center">
              {LINKS.map((link) => (
                <Link
                  as={AnchorLink}
                  key={link.title}
                  px={2}
                  py={1}
                  rounded={"sm"}
                  offset={link.offset}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                  href={link.anchor}
                  onClick={onClose}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </section>
  );
}
