import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
      ":root": {
        "--portfolio-accent": "#ffa500",
        "--portfolio-muted": "#888",
        "--portfolio-border": props.colorMode === "dark" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
        "--portfolio-footer-bg": props.colorMode === "dark" ? "#171923" : "#fff",
      },
    }),
  },
});

const sakuraTheme = extendTheme(theme, {
  config: { initialColorMode: "light", useSystemColorMode: false },
  colors: {
    white: "#fff8fb",
    gray: {
      50: "#fff6fa", 100: "#fbe5ee", 200: "#ebc3d3", 300: "#d7a1b8",
      400: "#aa6f89", 500: "#946078", 600: "#805369", 700: "#674157",
      800: "#4b2b3c", 900: "#321b28",
    },
    // Existing orange controls use the Sakura accent without changing other themes.
    orange: {
      50: "#fff2f7", 100: "#fcd9e8", 200: "#f7bad2", 300: "#ee91b6",
      400: "#d55e90", 500: "#b93d72", 600: "#a82c60", 700: "#912b57",
      800: "#77264a", 900: "#5c203b",
    },
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": "#fff1f6",
      "chakra-body-text": "#4b2b3c",
      "chakra-border-color": "#ebc3d3",
    },
  },
  styles: {
    global: {
      html: { bg: "#fff1f6", color: "#4b2b3c" },
      body: { bg: "#fff1f6", color: "#4b2b3c" },
      ":root": {
        "--portfolio-accent": "#b93d72",
        "--portfolio-muted": "#805369",
        "--portfolio-border": "rgba(165,86,120,0.25)",
        "--portfolio-footer-bg": "#ffe4ef",
      },
    },
  },
});

export const portfolioThemes = {
  light: extendTheme(theme, { config: { initialColorMode: "light", useSystemColorMode: false } }),
  dark: extendTheme(theme, { config: { initialColorMode: "dark", useSystemColorMode: false } }),
  sakura: sakuraTheme,
};

export default theme;
