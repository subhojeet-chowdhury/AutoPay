import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Open Sans, sans-serif",
  },
});

export default theme;
