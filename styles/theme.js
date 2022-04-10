import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: "104px",
      fontWeight: "bold",
      lineHeight: "90%",
      fontFace: "Space Grotesk",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "bold",
      fontFace: "Inter",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "semibold",
    },
    h4: {
      fontSize: "24",
      fontWeight: "semibold",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Space Grotesk",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export default theme;
