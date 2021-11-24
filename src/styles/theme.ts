import {
  extendTheme,
  ThemeConfig,
  ColorModeProviderProps,
  ThemeProviderProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  styles: {
    global: (props: ColorModeProviderProps) => {
      return {
        body: {
          bg: mode("#fff", "rgb(26 32 44)")(props),
          color: mode("#230F5B", "#F7FAFC")(props),
        },
      };
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
  },
});
