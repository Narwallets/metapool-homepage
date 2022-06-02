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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import useSmoothScrollTo from "../../hooks/useSmoothScrollTo";

const LINKS = [
  { title: "TOP", anchor: "#top" },
  { title: "STAKING AND FARMS", anchor: "#staking-farms" },
  { title: "STNEAR ECOSYSTEM", anchor: "#ecosystem" },
  { title: "HOW IT WORKS", anchor: "#how-it-works" },
  { title: "TECHNOLOGY", anchor: "#technology" },
  { title: "BENEFITS", anchor: "#benefits" },
  { title: "SECURITY", anchor: "#security" },
  { title: "INVESTORS", anchor: "#investors" },
  { title: "LATEST NEWS", anchor: "#latest-news" },
  { title: "COMMUNITY", anchor: "#community" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollFun = () => {
      if (typeof window !== "undefined") setScrolled(window.pageYOffset > 50);
    };

    if (typeof window !== "undefined")
      window.addEventListener("scroll", scrollFun);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", scrollFun);
    };
  }, []);

  return (
    <>
      <a id="#top" {...useSmoothScrollTo("#top")} />
      <Box
        bg={scrolled ? "white" : "transparent"}
        boxShadow={scrolled ? "md" : "none"}
        px={"2rem"}
        py="1rem"
        position="fixed"
        zIndex="101"
        w="full"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link m={0} p={0} href="/#top">
            <Image m={0} p={0} alt="logo" src={"logo.svg"} w={69} h={36} />
          </Link>
          <Flex alignItems={"center"}>
            <IconButton
              variant={"none"}
              bgColor="transparent"
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
            <Stack as={"nav"} spacing={4} textAlign="center">
              {LINKS.map((link) => (
                <Link
                  key={link.title}
                  px={2}
                  py={1}
                  rounded={"sm"}
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
    </>
  );
}
