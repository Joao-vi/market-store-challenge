import { ReactNode, useCallback, useEffect, useReducer, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Box } from "@chakra-ui/react";

import { SelectDropDown, SelectButton } from "./styles";

interface SelectInputProps {
  label: string;
  children: ReactNode;
}

export function SelectInput({ label, children }: SelectInputProps) {
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
    <Box fontSize="18px" position="relative">
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
