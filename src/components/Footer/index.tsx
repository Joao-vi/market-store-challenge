import { VStack, Text, HStack } from "@chakra-ui/react";
export function Footer() {
  return (
    <VStack w="100vw">
      <Text as="span"> @2021 - Marketplace</Text>
      <HStack>
        <Text as="span" fontWeight="bold">
          {`Desing: `}
          <Text as="span" fontWeight="normal">
            Pedro Lucinda
          </Text>
        </Text>
        <Text as="span" fontWeight="bold">
          {`Desenvolvedor: `}
          <Text as="span" fontWeight="normal">
            João Victor G. Rodrigues
          </Text>
        </Text>
      </HStack>
    </VStack>
  );
}
