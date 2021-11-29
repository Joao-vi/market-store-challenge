import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ISearchInputContext {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;

  inputRate: number;
  setInputRate: Dispatch<SetStateAction<number>>;

  inputSort: string;
  setInputSort: Dispatch<SetStateAction<string>>;
}
interface SearchInputProviderProps {
  children: ReactNode;
}

export const searchInputConext = createContext({} as ISearchInputContext);

export function SearchInputProvider({ children }: SearchInputProviderProps) {
  const [input, setInput] = useState("");
  const [inputRate, setInputRate] = useState(0); // 0 === Sem filtro aplicado
  const [inputSort, setInputSort] = useState("N"); // N === 'None' H === 'Highest' L = 'Lowest'
  return (
    <searchInputConext.Provider
      value={{ input, setInput, inputRate, setInputRate, inputSort, setInputSort }}
    >
      {children}
    </searchInputConext.Provider>
  );
}
