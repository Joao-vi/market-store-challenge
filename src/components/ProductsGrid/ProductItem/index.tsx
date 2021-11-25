import { Stack, Image, Text, Button, Flex } from "@chakra-ui/react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

interface ProductItemProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: string;
  rating: Record<"count" | "rate", number>;
  title: string;
}

export function ProductItem({
  category,
  title,
  description,
  id,
  image,
  price,
  rating,
}: ProductItemProps) {
  const formatedDescription = description.slice(0, 58);
  const formatedTitle = title.slice(0, 18);

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      border="1px"
      borderColor="#230F5B"
      borderRadius={8}
      p={15}
      flex="1"
    >
      <Image boxSize="200px" objectFit="contain" src={image} alt={title} />
      <Stack color="#230F5B">
        <Text as="h1" fontWeight="bold">
          {formatedTitle}
        </Text>

        <Text as="h2" fontWeight="bold">
          {`Description: `}
          <Text as="span" fontWeight="normal">
            {`${formatedDescription}...`}
          </Text>
        </Text>

        <Flex alignItems="center">
          <Text as="h2" fontWeight="bold" pr="5px">
            {`Rating: `}
          </Text>
          <ReactStars value={rating.rate} count={5} edit={false} size={20} />
        </Flex>

        <Text as="h2" fontWeight="bold">
          {`Price: `}
          <Text as="span" fontWeight="normal">
            $ {price}
          </Text>
        </Text>
      </Stack>

      <Button
        _hover={{ filter: "opacity(.9);" }}
        alignSelf="normal"
        type="button"
        bgColor="#230f5b"
        color="#fff"
      >
        Add to cart
      </Button>
    </Stack>
  );
}
