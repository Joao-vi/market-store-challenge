import { Box, Grid, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

import { SearchInput } from "../components/SearchInput";
import { ProductsGrid } from "../components/ProductsGrid/";
import { Cart } from "../components/Cart";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Store | Market</title>
      </Head>
      <Box as="main" maxW={1200} w="94%" mx="auto" my={57}>
        <Grid templateColumns="3fr 1fr" templateRows="max-content 1fr">
          <SearchInput />
          <Cart />
          <ProductsGrid />
        </Grid>
      </Box>
    </>
  );
}
