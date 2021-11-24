// prettier-ignore
import { Input, InputGroup, InputRightElement, Icon ,Stack,Flex, } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

import { SelectInput } from "./CustomSelect/";

export function SearchInput() {
  return (
    <Stack spacing="24px" w="312px">
      <InputGroup w="312px">
        <Input
          placeholder="Pesquisar na loja.."
          variant="outline"
          borderColor="#230F5B"
        />
        <InputRightElement>
          <Icon fontSize="25px" as={AiOutlineSearch} />
        </InputRightElement>
      </InputGroup>
      <Flex>
        <SelectInput />
      </Flex>
    </Stack>
  );
}
