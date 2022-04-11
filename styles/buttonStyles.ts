import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {
    borderRadius: "30px",
    fontFamily: "Inter, sans-serif",
  },
  sizes: {
    sm: {
      fontSize: "14px",
      h: "52px",
      px: "45px",
    },
    md: {
      fontSize: "16px",
      h: "52px",
      px: "45px",
    },
    lg: {
      fontSize: "18px",
      h: "52px",
      px: "45px",
    },
  },
  variants: {
    solid: (props: any) => ({
      bg: "primary",
      color: "white",

      _hover: {
        bg: whiten("primary", 20)(props),
      },
    }),
    outlined: (props: any) => ({
      borderColor: "primary.200",
      color: "primary",

      _hover: {
        bg: "primary",
      },
    }),
  },
  defaultProps: {},
};
