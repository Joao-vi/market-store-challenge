// prettier-ignore
import { Flex, Text, HStack, Link, Avatar } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" justifyContent="space-between" maxW={1200} w="94%" mx="auto" pt={34}>
      <Text as="span" fontWeight="700" fontSize={28}>
        Market
      </Text>
      <HStack as="nav" spacing="28px">
        <Link href="" fontWeight="bold" fontSize={18}>
          Store
        </Link>
        <Link href="" color="#230f5b85">
          My Account
        </Link>
      </HStack>
      <Avatar />
    </Flex>
  );
}
