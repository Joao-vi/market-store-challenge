import { HStack, Text, VStack, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { productContext } from "../../context/productContext";
import { searchInputConext } from "../../context/searchInputContext";
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
  const { products } = useContext(productContext);
  const { input, inputRate, inputSort } = useContext(searchInputConext);
  const [indexPagination, setIndexPagination] = useState(1);

  const hasProducts = products.length > 0;
  const qtdProducts = Math.ceil(
    products.filter((product) => {
      return product.title.includes(input);
    }).length / 3
  );
  const isPrevButtonDisable = indexPagination === 1;
  const isNextButtonDisable = indexPagination === qtdProducts;

  const nextPage = () => setIndexPagination((prevState) => prevState + 1);
  const prevPage = () => setIndexPagination((prevState) => prevState - 1);

  const shouldRenderProduct = (key: number) =>
    indexPagination * 3 - 3 <= key && key <= indexPagination * 3 - 1;

  const handleFilterProductsByName = () =>
    products.filter(({ title }) => {
      return title.toLowerCase().includes(input.toLowerCase());
    });

  const handeFilterProductsByRate = (product: IAPIData) => {
    const min = inputRate;
    const max = inputRate + 0.99999;
    if (min === 0) {
      return true; // 0 === Sem filtro aplicado, irá retornar todos os produtos.
    } else {
      const rateInterval = min <= product.rating.rate && product.rating.rate <= max;
      return rateInterval;
    }
  };
  const handleFilterProductsBySort = (a: IAPIData, b: IAPIData) => {
    if (inputSort === "H") {
      return parseInt(b.price, 10) - parseInt(a.price, 10);
    } else if (inputSort === "L") {
      return parseInt(a.price, 10) - parseInt(b.price, 10);
    }

    return 1;
  };

  const handleRenderProduct = (product: IAPIData, key: number) => {
    if (shouldRenderProduct(key)) {
      return <ProductItem {...product} key={`product-${key}-${product.id}`} />;
    }
  };
  return (
    <VStack>
      <HStack spacing="20px" alignItems="stretch" justifyContent="space-between" my={42}>
        {hasProducts ? (
          handleFilterProductsByName()
            .filter(handeFilterProductsByRate)
            .sort(handleFilterProductsBySort)
            .map(handleRenderProduct)
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
        <Button cursor="pointer" onClick={nextPage} isDisabled={isNextButtonDisable}>
          Next
        </Button>
      </HStack>
    </VStack>
  );
}
