import type { NextPage } from "next";
import Head from "next/head";

import { Box, Grid, useColorMode } from "@chakra-ui/react";

import { SearchInput } from "../components/SearchInput";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Store | Market</title>
      </Head>
      <Box as="main" maxW={1200} w="94%" mx="auto" my={57}>
        <Grid templateColumns="2fr 1fr" templateRows="max-content 1fr">
          <SearchInput />
        </Grid>
      </Box>
    </>
  );
}
