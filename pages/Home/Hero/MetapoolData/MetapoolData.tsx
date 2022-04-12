import { Text, Box } from "@chakra-ui/react";
import type { NextPage } from "next";

interface Props {
  title: string;
  value: string;
}

const DataItem: NextPage<Props> = ({ title, value }) => (
  <Box textAlign="left">
    <Text fontSize={["xl","2xl","5xl"]} fontWeight="bold" fontFamily={["Space Grotesk"]}>
      {value}
    </Text>
    <Text fontSize={["sm","sm","lg"]}  fontFamily={["Inter"]} textTransform="uppercase">
      {title}
    </Text>
  </Box>
);

export default DataItem;
