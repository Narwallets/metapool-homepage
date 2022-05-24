import type { NextPage } from "next";
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  inverted: boolean;
}

const Item: NextPage<Props> = ({
  title,
  description,
  linkText,
  linkHref,
  image,
  inverted,
}) => (
  <>
    <Flex
      alignItems="center"
      borderRadius={"2xl"}
      bgImage={{
        base: "",
        sm: `url('${image}')`,
      }}
      bgRepeat="no-repeat"
      bgSize={{ base: "cover", lg: "unset" }}
      backgroundPosition={{
        base: inverted ? "left" : "right",
        lg: inverted ? "left" : "right",
      }}
      border="1px"
      borderColor="gray.600"
      h={{ base: "auto", md: "387px" }}
      my={{ base: "2rem", lg: "2rem" }}
      p="2rem"
    >
      <Box
        ml={{ base: 0, md: inverted ? "50%" : 0 }}
        mr={{ base: 0, md: !inverted ? "50%" : 0 }}
        w="full"
        textAlign={"left"}
      >
        <Heading size="md" color="white" textStyle={"h3"} fontFamily="Inter">
          {title}
        </Heading>
        <Text color="white" my="30px" fontFamily="Inter">
          {description}
        </Text>
        <Link
          href={linkHref}
          variant="link"
          textColor={"#818CF8"}
          pl="0"
          whiteSpace={"nowrap"}
          isExternal
        >
          {linkText} <ChevronRightIcon w={6} h={6} color="#818CF8" />
        </Link>
      </Box>
    </Flex>
  </>
);

export default Item;
