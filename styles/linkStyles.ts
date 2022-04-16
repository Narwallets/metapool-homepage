import { whiten } from "@chakra-ui/theme-tools";

export const LinkStyles = {
  baseStyle: {
    borderRadius: "30px",
    fontFamily: "Inter, sans-serif",
    px: "45px",
    py: "16px",
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
    link: (props: any) => ({
      color: "primary",
      fontWeight: "semibold",
    }),
  },
  defaultProps: {},
};
