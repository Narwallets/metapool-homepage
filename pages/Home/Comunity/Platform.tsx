import type { NextPage } from "next";
import { Avatar, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  description: string;
  icon: string;
  href: string;
}

const Comunity: NextPage<Props> = ({ name, description, href, icon }) => (
  <Link p="0" href={href} fontWeight={600} isExternal={true}>
    <Stack
      mt={6}
      direction={"row"}
      spacing={4}
      align={"center"}
      rounded="8px"
      bgColor="white"
      fontFamily="Inter"
      p="16px"
      shadow="sm"
    >
      <Avatar src={icon} />
      <Stack direction={"column"} spacing={0} fontSize={"sm"}>
        <Text p="0" fontWeight={600}>
          {name}
        </Text>
        <Text color={"gray.500"} whiteSpace="nowrap">{description}</Text>
      </Stack>
    </Stack>
  </Link>
);

export default Comunity;
