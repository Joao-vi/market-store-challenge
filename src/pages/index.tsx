import type { NextPage } from "next";
import Head from "next/head";

import { Text, Box, Button, useColorMode } from "@chakra-ui/react";

import { SearchInput } from "../components/SearchInput";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Store | Market</title>
      </Head>
      <Box as="main">
        <SearchInput />
      </Box>
    </>
  );
}
