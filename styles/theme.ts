import { extendTheme } from "@chakra-ui/react";
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
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
  textStyles: {
    button: {
      fontFamily: "Inter, sans-serif",
    },
    h1: {
      fontWeight: "bold",
      lineHeight: "90%",
    },
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "semibold",
    },
    h4: {
      fontWeight: "semibold",
    },
    h5: {
      fontWeight: "semibold",
    },
  },
  fonts: {
    alternative: "'Meta Space', 'Space Grotesk'",
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
