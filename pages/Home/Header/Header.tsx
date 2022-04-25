import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const LINKS = [
  { title: "TOP", anchor: "#top" },
  { title: "STAKING FARMS", anchor: "#staking-farms" },
  { title: "STNEAR ECOSYSTEM", anchor: "#ecosystem" },
  { title: "HOW IT WORKS", anchor: "#how-it-works" },
  { title: "TECHNOLOGY", anchor: "#technology" },
  { title: "BENEFITS", anchor: "#benefits" },
  { title: "SECURITY", anchor: "#security" },
  { title: "INVESTORS", anchor: "#investors" },
  { title: "LATEST NEWS", anchor: "#latest-news" },
  { title: "COMMUNITY", anchor: "#community" },
];

export default function Simple() {
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
    <>
      <Box
        bg={scrolled ? "white" : "transparent"}
        boxShadow={scrolled ? "md" : "none"}
        py="1rem"
        px={"2rem"}
        position="fixed"
        zIndex="101"
        w="full"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image alt="logo" src={"logo.svg"} w="202" h="34" />
          <Flex alignItems={"center"}>
            <IconButton
              variant={"none"}
              bgColor="white"
              color="black"
              icon={
                isOpen ? (
                  <CloseIcon w="100px" h="20px" outline="none" />
                ) : (
                  <HamburgerIcon w="100px" h="40px" outline="none" />
                )
              }
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
              boxShadow="none"
            />
            <Link
              colorScheme="primary"
              variant="outlined"
              borderWidth="2px"
              href="https://metapool.app/dapp/mainnet/meta/"
              display={{ base: "none", md: "initial" }}
            >
              Connect Wallet
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
            <Stack
              as={"nav"}
              spacing={4}
              textAlign="center"
            >
              {LINKS.map((link) => (
                <Link
                  key={link.title}
                  px={2}
                  py={1}
                  rounded={"sm"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
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
    </>
  );
}
