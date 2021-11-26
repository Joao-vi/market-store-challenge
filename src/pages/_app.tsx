import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { Header } from "../components/Header";
import { ProductContextProvider } from "../context/productContext";
import { CartContextProvider } from "../context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ProductContextProvider>
        <CartContextProvider>
          <Header />
          <Component {...pageProps} />
        </CartContextProvider>
      </ProductContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
