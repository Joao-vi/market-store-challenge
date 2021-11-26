import { VStack, Text, Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

import { CartItem } from "./CartItem";
import { cartContext } from "../../context/cartContext";

export function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useContext(cartContext);

  const hasProductsInCart = cart.length > 0;

  useEffect(() => {
    // !!!handleSumCartProducts!!!
    const total = cart.reduce((acc, { price, quantity }) => {
      const priceNumber = parseFloat(price);
      return priceNumber * quantity + acc;
    }, 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <VStack
      as="section"
      mx="auto"
      border="1px"
      borderColor="#230F5B"
      justifyContent="flex-end"
      alignItems="stretch"
      borderRadius={8}
      maxW="max-content"
    >
      {hasProductsInCart &&
        cart.map((item, key) => (
          <CartItem
            quantity={item.quantity}
            price={item.price}
            title={item.title}
            key={`CART-${key}`}
          />
        ))}

      <Box
        display="flex"
        justifyContent="center"
        alignSelf="stretch"
        bgColor="#230F5B"
        p="15px"
        borderRadius={6}
      >
        <Text as="span" fontWeight="bold" color="#ffff">
          {`Total: `}
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BRL",
          }).format(totalAmount)}
        </Text>
      </Box>
    </VStack>
  );
}
