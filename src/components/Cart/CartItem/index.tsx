import { VStack, Text } from "@chakra-ui/layout";

interface IAPIDataProps {
  price: string;
  title: string;
  quantity: number;
}

export function CartItem({ title, price, quantity }: IAPIDataProps) {
  const formatedTitle = title.slice(0, 18);
  return (
    <VStack
      p="13px"
      mx="20px!important"
      my="13px"
      alignItems="flex-start"
      border="1px"
      borderColor="#230F5B"
      borderRadius={8}
    >
      <Text as="h1" fontWeight="bold">
        {`Name: `}
        <Text as="span" fontWeight="normal">
          {formatedTitle}
        </Text>
      </Text>
      <Text as="h1" fontWeight="bold">
        {`Quantity: `}
        <Text as="span" fontWeight="normal">
          {quantity}
        </Text>
      </Text>
    </VStack>
  );
}
