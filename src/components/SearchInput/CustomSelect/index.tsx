import { useCallback, useEffect, useReducer, useState } from "react";

import { SelectDropDown, SelectButton } from "./styles";
import { Flex } from "@chakra-ui/react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function SelectInput() {
  const [isDropDownVisible, toggleDropDownVisible] = useReducer((prevState) => !prevState, false);
  const [selectButtonLabel, setSelectButtonLabel] = useState("");

  const handleCloseDropDownClickOutside = useCallback(() => {
    if (isDropDownVisible) toggleDropDownVisible();
  }, [isDropDownVisible]);

  useEffect(() => {
    document.addEventListener("click", handleCloseDropDownClickOutside);
    return () => document.removeEventListener("click", handleCloseDropDownClickOutside);
  }, [handleCloseDropDownClickOutside]);

  function handleChangeSelectButtonLabel(event: any) {
    setSelectButtonLabel(event.target.innerHTML);
  }
  return (
    <Flex flexDir="column" justifyContent="center" ml="4" fontSize="18px" position="relative">
      <SelectButton onClick={toggleDropDownVisible}>
        {selectButtonLabel || "Filter by rating"}
        <MdOutlineKeyboardArrowDown fontSize="26px" />
      </SelectButton>
      {isDropDownVisible && (
        <SelectDropDown onClick={handleChangeSelectButtonLabel}>
          <label htmlFor="op-1">1 Star</label>
          <input type="radio" id="op-1" name="stars-number" value="1" />

          <label htmlFor="op-2">2 Stars</label>
          <input type="radio" id="op-2" name="stars-number" value="2" />

          <label htmlFor="op-3">3 Stars</label>
          <input type="radio" id="op-3" name="stars-number" value="3" />

          <label htmlFor="op-4">4 Stars</label>
          <input type="radio" id="op-4" name="stars-number" value="4" />

          <label htmlFor="op-5">5 Stars</label>
          <input type="radio" id="op-5" name="stars-number" value="5" />
        </SelectDropDown>
      )}
    </Flex>
  );
}
