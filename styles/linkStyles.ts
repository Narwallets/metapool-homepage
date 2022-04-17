import { darken } from "@chakra-ui/theme-tools";

export const LinkStyles = {
  baseStyle: {
    rounded: "30px",
    fontFamily: "Inter, sans-serif",
    px: "45px",
    borderColor: "primary",
    py: "16px",
  },
  variants: {
    solid: (props: any) => ({
      bg: "primary",
      color: "white",

      _hover: {
        bg: darken("primary", 20)(props),
      },
    }),
    outlined: (props: any) => ({
      borderColor: "primary",
      color: "primary",

      _hover: {
      color: "white",
      bg: "primary",
      },
    }),
    link: (props: any) => ({
      color: "primary",
      fontWeight: "semibold",
    }),
  },
  defaultProps: {},
};
