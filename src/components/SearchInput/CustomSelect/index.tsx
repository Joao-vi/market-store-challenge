import { ReactNode, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Box } from "@chakra-ui/react";

import { SelectDropDown, SelectButton } from "./styles";
import { searchInputConext } from "../../../context/searchInputContext";

interface SelectInputProps {
  label: string;
  children: ReactNode;
}

export function SelectInput({ label, children }: SelectInputProps) {
  const [isDropDownVisible, toggleDropDownVisible] = useReducer((prevState) => !prevState, false);
  const [selectButtonLabel, setSelectButtonLabel] = useState("");
  const { setInputRate, setInputSort } = useContext(searchInputConext);

  const handleCloseDropDownClickOutside = useCallback(() => {
    if (isDropDownVisible) toggleDropDownVisible();
  }, [isDropDownVisible]);

  useEffect(() => {
    document.addEventListener("click", handleCloseDropDownClickOutside);
    return () => document.removeEventListener("click", handleCloseDropDownClickOutside);
  }, [handleCloseDropDownClickOutside]);

  function handleChangeSelectButtonLabel(event: any) {
    const formated = event.target.innerHTML.slice(0, 1);
    if (formated !== "H" && formated !== "L") {
      if (formated === "F") {
        setInputRate(0);
      } else {
        setInputRate(parseInt(formated, 10));
      }
    } else setInputSort(formated);
    setSelectButtonLabel(event.target.innerHTML);
  }

  return (
    <Box fontSize="18px" position="relative" w="170px">
      <SelectButton onClick={toggleDropDownVisible}>
        {selectButtonLabel || `${label}`}
        <MdOutlineKeyboardArrowDown fontSize="26px" />
      </SelectButton>

      {isDropDownVisible && (
        <SelectDropDown onClick={handleChangeSelectButtonLabel}>{children}</SelectDropDown>
      )}
    </Box>
  );
}
