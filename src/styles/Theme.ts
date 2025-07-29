import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
});

export default theme;
