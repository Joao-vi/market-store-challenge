import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Head from "next/head";

import { SearchInput } from "../components/SearchInput";
import { ProductsGrid } from "../components/ProductsGrid/";
import { Cart } from "../components/Cart";
import { productContext } from "../context/productContext";
import { useIsMounted } from "../hooks/useIsMounted";
import { SearchInputProvider } from "../context/searchInputContext";

export default function Home() {
  const { fetchAllProducts } = useContext(productContext);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      fetchAllProducts();
    }
  }, [fetchAllProducts, isMounted]);

  return (
    <>
      <Head>
        <title>Store | Market</title>
      </Head>
      <Box as="main" maxW={1200} w="94%" mx="auto" my={57}>
        <Grid templateColumns="3fr 1fr" templateRows="max-content 1fr">
          <SearchInputProvider>
            <GridItem>
              <SearchInput />
            </GridItem>
            <GridItem maxH={600} overflowY="auto" rowSpan={2}>
              <Cart />
            </GridItem>
            <GridItem>
              <ProductsGrid />
            </GridItem>
          </SearchInputProvider>
        </Grid>
      </Box>
    </>
  );
}
