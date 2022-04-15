import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";

const theme = extendTheme({
  breakpoints: {
    sm: "1000px",
  },
  styles: {
    global: {
      body: {
        bg: "#F8FAFC",
      },
    },
  },
  textStyles: {
    button: {
      fontFamily: "Inter, sans-serif",
    },
    h1: {
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
    h5: {
      fontSize: "18",
      fontWeight: "semibold",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Space Grotesk",
  },
  colors: {
    primary: "#0F172A",
    secondary: "#94A3B8",
  },
  components: {
    Button,
  },
});

export default theme;
