import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";
import { LinkStyles as Link } from "./linkStyles";

const theme = extendTheme({
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "-0.3px",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
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
    },
    h2: {
      fontSize: "48px",
      fontWeight: "bold",
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
    body: "Inter",
  },
  colors: {
    primary: "#0F172A",
    secondary: "#94A3B8",
  },
  components: {
    Button,
    Link,
  },
});

export default theme;
