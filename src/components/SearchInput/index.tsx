// prettier-ignore
import { Input, InputGroup, InputRightElement, Icon ,Stack,Flex, } from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { SelectInput } from "./CustomSelect/";
import { Option } from "./CustomSelect/option";

import { searchInputConext } from "../../context/searchInputContext";

export function SearchInput() {
  const { input, setInput } = useContext(searchInputConext);

  return (
    <Stack w="350px" alignItems="center" justifyContent="center" mx="auto">
      <InputGroup>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pesquisar na loja.."
          variant="outline"
          borderColor="#230F5B"
        />
        <InputRightElement>
          <Icon fontSize="25px" as={AiOutlineSearch} />
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="space-between" w="100%">
        <SelectInput label="Filter by rating">
          <Option title="1 Start" name="select-options-stars" id="op-1" value="1" />
          <Option title="2 Starts" name="select-options-stars" id="op-2" value="2" />
          <Option title="3 Starts" name="select-options-stars" id="op-3" value="3" />
          <Option title="4 Starts" name="select-options-stars" id="op-4" value="4" />
          <Option title="5 Starts" name="select-options-stars" id="op-5" value="5" />
        </SelectInput>

        <SelectInput label="Sort by">
          <Option title="Highest price" name="select-options-sort" id="op-6" value="higher" />
          <Option title="Lowest price" name="select-options-sort" id="op-7" value="lower" />
        </SelectInput>
      </Flex>
    </Stack>
  );
}
