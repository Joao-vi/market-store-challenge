import { HStack, Text, VStack, Button } from "@chakra-ui/react";
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
  const [indexPagination, setIndexPagination] = useState(1);

  const hasProducts = products.length > 0;
  const qtdProducts = Math.ceil(products.length / 3);
  const isPrevButtonDisable = indexPagination === 1;
  const isNextButtonDisavle = indexPagination === qtdProducts;

  const nextPage = () => setIndexPagination((prevState) => prevState + 1);
  const prevPage = () => setIndexPagination((prevState) => prevState - 1);

  const shouldRenderProduct = (key: number) =>
    indexPagination * 3 - 3 <= key && key <= indexPagination * 3 - 1;

  useEffect(() => {
    fetch(`${api.base_url}/${api.products}`)
      .then((response) => response.json().then((data) => setProducts(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <VStack>
      <HStack spacing="20px" alignItems="stretch" justifyContent="space-between" my={42}>
        {hasProducts ? (
          products.map((product, key) => {
            if (shouldRenderProduct(key)) {
              return <ProductItem {...product} key={`product-${key}-${product.id}`} />;
            }
          })
        ) : (
          <Text as="h1" color="black">
            Sem dados
          </Text>
        )}
      </HStack>
      <HStack>
        <Button cursor="pointer" onClick={prevPage} isDisabled={isPrevButtonDisable}>
          Previous
        </Button>
        <Button cursor="pointer" onClick={nextPage} isDisabled={isNextButtonDisavle}>
          Next
        </Button>
      </HStack>
    </VStack>
  );
}
