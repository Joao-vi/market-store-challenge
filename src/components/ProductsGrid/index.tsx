import { HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { ProductItem } from "./ProductItem";

interface IAPIData {
  category: string;
  description: string;
  id: string;
  image: string;
  price: string;
  rating: Record<"count" | "rate", number>;
  title: string;
}

export function ProductsGrid() {
  const [products, setProducts] = useState<IAPIData[]>([]);
  const hasProducts = products.length > 0;
  console.log(hasProducts);

  useEffect(() => {
    fetch(`${api.base_url}/${api.products}${api.options.limit}=3`)
      .then((response) => response.json().then((data) => setProducts(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <HStack spacing="20px" alignItems="stretch" justifyContent="space-between" my={42}>
      {hasProducts ? (
        products.map((product, key) => (
          <ProductItem {...product} key={`product-${key}-${product.id}`} />
        ))
      ) : (
        <Text as="h1" color="black">
          Sem dados
        </Text>
      )}
    </HStack>
  );
}
