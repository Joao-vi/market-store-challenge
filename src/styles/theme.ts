import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#230F5B",
      },
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
  },
});
