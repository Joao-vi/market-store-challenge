import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ISearchInputContext {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}
interface SearchInputProviderProps {
  children: ReactNode;
}

export const searchInputConext = createContext({} as ISearchInputContext);

export function SearchInputProvider({ children }: SearchInputProviderProps) {
  const [input, setInput] = useState("");

  return (
    <searchInputConext.Provider value={{ input, setInput }}>{children}</searchInputConext.Provider>
  );
}
