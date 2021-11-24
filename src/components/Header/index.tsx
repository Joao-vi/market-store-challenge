// prettier-ignore
import { Flex, Text, HStack, Link, Avatar, IconButton,useColorModeValue, useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleThemeButton = useColorModeValue(<BsSunFill />, <BsMoonFill />);

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      maxW={1200}
      w="94%"
      mx="auto"
      pt={34}
    >
      <Text as="span" fontWeight="700" fontSize={28}>
        Market
      </Text>
      <HStack as="nav" spacing="28px">
        <Link href="" fontWeight="bold" fontSize={18}>
          Store
        </Link>
        <Link href="" color={useColorModeValue("", "#eeeeee8c")}>
          My Account
        </Link>
      </HStack>
      <HStack spacing="12px">
        <Avatar />
        <IconButton
          aria-label="Toggle theme mode."
          icon={toggleThemeButton}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
}
