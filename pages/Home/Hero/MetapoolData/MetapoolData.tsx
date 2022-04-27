import { Text, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import NumberFormat from "react-number-format";

interface Props {
  title: string;
  value: any;
}

const DataItem: NextPage<Props> = ({ title, value }) => (
  <Box
    textAlign={{ base: "center", md: "left" }}
    py={{ base: "0", lg: "2rem" }}
  >
    <Text
      fontSize={{ base: "4xl" }}
      fontWeight="bold"
      fontFamily={"'Meta Space', 'Space Grotesk'"}
    >
      {value ? value : "-"}
    </Text>
    <Text
      fontSize={{ base: "md", sm: "lg" }}
      fontFamily={["Inter"]}
      textTransform="uppercase"
    >
      {title}
    </Text>
  </Box>
);

export default DataItem;
