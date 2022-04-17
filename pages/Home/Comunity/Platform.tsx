import type { NextPage } from "next";
import {
  Avatar,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  name: string;
  description: string;
  icon: string;
}

const Comunity: NextPage<Props> = ({ name, description, icon }) => (
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
      <Text fontWeight={600}>{name}</Text>
      <Text color={"gray.500"}>{description}</Text>
    </Stack>
  </Stack>
);

export default Comunity;
